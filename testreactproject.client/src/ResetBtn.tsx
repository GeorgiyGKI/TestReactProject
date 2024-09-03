import { ResetIcon } from "@radix-ui/react-icons";

function ResetBtn({ setCount }) {
  const handleClick = () => {
    setCount(0)
  };
  return (
    <button className="reset-btn"
      onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  )
  
}

export default ResetBtn;  