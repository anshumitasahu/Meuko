


type CreateSalesmanModalProps = {
    onClose: () => void;
}

export default function CreateSalesmanModal({ onClose }: CreateSalesmanModalProps) {
    return (
        <div>
            Create SalesMan
            <button
                onClick={onClose}

            >Close</button>
        </div>
    )
}