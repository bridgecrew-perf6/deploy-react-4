import { useNavigate } from 'react-router-dom'


export default function Page1() {
    const navigate = useNavigate();
    return <div>this is Page1 component!

    <button onClick={() => navigate('/page2')}>to page2</button>
    </div>
}