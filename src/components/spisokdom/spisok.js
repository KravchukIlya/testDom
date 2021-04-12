import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

export const Spisok = () => {
    const [firm, setFirm] = useState([])
    const [spisk, setSpisk] = useState('')
    const [table, setTable] = useState([])

    useEffect(() => {
        result()
    }, [])

    const result = () => {
        axios
            .get('http://test-alpha.reestrdoma.ru/api/reestrdoma/companies/', {
                headers: {
                    Authorization:
                        'Bearer ' + sessionStorage.getItem('tokenUser'),
                },
            })
            .then((res) => {
                const getResult = res.data.data

                setFirm(getResult)
            })
    }

    const resultat = firm.map((item) => {
        return (
            <option key={item.id} value={item.id}>
                {item.name}
                {item.id}
            </option>
        )
    })
    useEffect(() => {
        ApiSpisok()
    }, [spisk])
    const ApiSpisok = () => {
        axios
            .get(
                `http://test-alpha.reestrdoma.ru/api/reestrdoma/company/houses/${spisk}/`,
                {
                    headers: {
                        Authorization:
                            'Bearer ' + sessionStorage.getItem('tokenUser'),
                    },
                }
            )
            .then((res) => {
                const respon = res.data.data

                setTable(respon)
            })
    }

    const tableItem = table.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.address}</td>
                <td>{item.reestrFlatCount}</td>
                <td>{item.createdAt}</td>
            </tr>
        )
    })

    return (
        <div className="block2">
            <select value={spisk} onChange={(e) => setSpisk(e.target.value)}>
                {resultat}
            </select>
            <table className="table">
                <thead>
                    <tr>
                        <th>Адрес</th>
                        <th>Квартиры</th>
                        <th>Дата обновления</th>
                    </tr>
                </thead>
                <tbody> {tableItem}</tbody>
            </table>
        </div>
    )
}
