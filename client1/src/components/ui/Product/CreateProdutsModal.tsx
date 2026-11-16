import { useState } from "react"


type CreateProductsModalProps = {
    onClose: () => void;
}


export default function CrateProductsModal({ onClose }: CreateProductsModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("")

    return (
        <div>
            <button
                onClick={onClose}
            >
                Close
            </button>
            <div>
                <p>Product's Name</p>
                <input
                    type="text"
                    value={name}
                />
            </div>
            <div>
                <p>Product's email</p>
                <input
                    type="text"
                    value={email}
                />
            </div>
            <div>
                <p>Product's Phone</p>
                <input
                    type="text"
                    value={phone}
                />
            </div>
            <div>
                <p>Product's Address</p>
                <input
                    type="text"
                    value={address}
                />
            </div>
            <div>
                <button>
                    ADD PRODUCTS
                </button>
            </div>
        </div>
    )
}