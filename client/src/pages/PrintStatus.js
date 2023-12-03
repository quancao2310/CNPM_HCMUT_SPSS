
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StatusTable from '../components/print_status/StatusTable';

function PrintStatus(){

    const id = 2112444;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/print/status/${id}`)
          .then((response) => {
            setData(response.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, [id]);

    return (
        <div
            className = "d-flex justify-content-center align-items-center"
            style = {{
                background: 'linear-gradient(180deg, #70D2E5 0%, #FFFFFF 100%)',
                padding: '6% 0%'
            }}
        >
            <div 
                className = "container rounded-4 w-50 px-5 py-2"
                style={{ background: 'rgba(255, 255, 255, 0.76)' }}
            >
                <div 
                    className = "text-center text-primary fs-1 fw-bold p-2"
                    style = {{
                        borderBottom: `1px solid var(--color-bk1)`,
                        color: 'var(--color-bk1)'
                    }}
                >
                    Trạng thái in
                </div>
                <StatusTable data={data} />
                <div className = "d-flex justify-content-center p-2">
                    <Link className = "btn btn-primary" to='/print'>Thoát</Link>
                </div>
            </div>
        </div>
    );
}

export default PrintStatus;