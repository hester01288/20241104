import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/Register.css"
const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        gender: '',
        tel: '',
        mail: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('제출된 데이터.:', formData);
        alert('회원 가입 성공!'); 
        navigate('/');
    };


    return (
        <div className="register-container">
            <div className="area">
                <h2>회원 가입</h2>
            </div>
            <div className="info">
                <h3>기본정보</h3>
                <form onSubmit={handleSubmit}>
                    <table className="info" border="0">
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <span>
                                <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        maxLength="10"
                                        size="10"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    </span>
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>
                                <span>
                                <input
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="male">남자</label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="female">여자</label>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <th>전화번호</th>
                            <td>
                                <span> <input
                                        type="tel"
                                        name="tel"
                                        id="tel"
                                        value={formData.tel}
                                        onChange={handleChange}
                                    /></span>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <span> <input
                                        type="text"
                                        name="mail"
                                        id="mail"
                                        value={formData.mail}
                                        onChange={handleChange}
                                    /></span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <input type="submit" value="JOIN" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Register;