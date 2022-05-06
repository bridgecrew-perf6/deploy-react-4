import {useNavigate} from "react-router-dom";

export default function Page2() {
    const navigate = useNavigate();

    return <div>this is Page2 component!
        <button onClick={() => navigate('/page1')}>to page1</button>

    </div>
}