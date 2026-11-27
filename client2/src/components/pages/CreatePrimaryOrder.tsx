import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CreatePrimaryOrder() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-full">
                <button onClick={() => navigate(-1)}>
                    <ChevronLeft />
                </button>
                <div>
                    Create Primary Order
                </div>
            </div>

            <div>
                <div>
                    <p>
                        product
                    </p>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <p>
                        price
                    </p>
                    <input
                        type="number"
                    />
                </div>
            </div>
        </div>
    )
}