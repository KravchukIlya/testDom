import axios from 'axios'
import React, { useState } from 'react'
import './style.css'

export const Avtoriz = ({ setReg }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onBtnClick = () => {
        if ((username === 'superuser@mail.ru') & (password === '11111111')) {
            alert(`Вы вошли:${username}`)
        } else {
            if (username !== 'superuser@mail.ru') {
                alert('Вы ввели не верный логин')
            } else {
                if (password !== '11111111') {
                    alert('Вы ввели не верный пароль')
                } else {
                    if ((username === '') & (password === '')) {
                        alert('Вы не ввели логин и пароль')
                    }
                }
            }
        }

        axios
            .post('http://test-alpha.reestrdoma.ru/api/login/', {
                username,
                password,
            })
            .then((res) => {
                sessionStorage.setItem('tokenUser', res.data.data.token.access)
            })
        if (sessionStorage.length !== 0) {
            setReg(false)
        }
    }

    return (
        <div className="block">
            <input
                className="block_inp_1"
                value={username}
                type="emeil"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="block_inp_2"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="block_btn" onClick={onBtnClick}>
                Вход
            </button>

            <p>superuser@mail.ru</p>
            <p>11111111</p>
        </div>
    )
}
