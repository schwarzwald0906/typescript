export const Practice4 = () => {
  const calcTaxAmount = (tax) => {
    console.log(tax * 1.1);
  };

  const onClickPractice = () => {
    calcTaxAmount(1000);
  };
  return (
    <div>
      <p>練習問題④</p>
      <button onClick={onClickPractice}>練習</button>
    </div>
  );
};
