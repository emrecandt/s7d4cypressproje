import { useEffect, useState } from 'react';
import './login.css';
const initialForm = {
  email: '',
  password: '',
  terms: false,
};
export default function Login() {
  const [formValue, setFormValue] = useState(initialForm);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termChecked, setTermChecked] = useState('')

  const [isFormValid, setIsFormValid] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  useEffect(() => {
    const isEmailValid = emailRegex.test(formValue.email);
    const isPasswordValid = passwordRegex.test(formValue.password);
    const isTermsChecked = formValue.terms;
    setIsFormValid(isEmailValid && isPasswordValid && isTermsChecked);
  }, [formValue.email, formValue.password, formValue.terms]);
  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    value = type == 'checkbox' ? checked : value;

    if (!emailRegex.test(formValue.email)) {
      setEmailError('Lütfen geçerli bir e-posta adresi girin.');
    } else {
      setEmailError('');
    }
    if (!passwordRegex.test(formValue.password)) {
      setPasswordError(
        'Şifre en az 8 karakter, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.'
      );
    } else {
      setPasswordError('');
    }
    if (!formValue.terms) {
      setTermChecked('Koşulları onaylayınız');
    } else {
      setTermChecked('');
    }

    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      emailRegex.test(formValue.email) &&
      passwordRegex.test(formValue.password) &&
      formValue.terms
    ) {
      alert('Form başarıyla gönderildi!');
      setFormValue(initialForm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formValue.email}
        onChange={handleChange}
      />
{emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      <label htmlFor="password">Şifre</label>
      <input
        type="password"
        name="password"
        value={formValue.password}
        onChange={handleChange}
      />
      {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

      <input
        type="checkbox"
        name="terms"
        id="terms"
        checked={formValue.terms}
        onChange={handleChange}
      />

      <label htmlFor="terms">
        I agree to terms of service and privacy policy
      </label>
{termChecked && <p style={{ color: 'red' }}>{termChecked}</p>}
      <button type="submit" disabled={!isFormValid}>
        Gönder
      </button>
    </form>
  );
}
