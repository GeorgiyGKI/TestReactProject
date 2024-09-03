import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";


function CountBtns({ setCount }) {
  return (
    <div className="button-container">
      <button className="count-btn"
        onClick={() => {
          setCount(prev => {
            let newNumber = prev - 1;
            return newNumber < 0 ? 0 : newNumber;

          })
        }}>
        <MinusIcon className="count-btn-icon"></MinusIcon>
      </button>
      <button className="count-btn"
        onClick={() => {
          setCount(prev => prev + 1)
        }}
      >
        <PlusIcon className="count-btn-icon"></PlusIcon>
      </button>
    </div>
  );
}

export default CountBtns;