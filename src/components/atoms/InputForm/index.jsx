export const InputForm = (props) => {
  const { inputValue, placeholder, handleChangeValue, handleKeyDown } = props;

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChangeValue}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  );
}