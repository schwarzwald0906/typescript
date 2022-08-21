export const Practice1 = () => {
  const calcTaxAmount = (tax: number) => {
    console.log(tax * 1.1);
  };

  const onClickPractice = () => {
    calcTaxAmount(1000);
  };
  return (
    <div>
      <p>練習問題①</p>
      <button onClick={onClickPractice}>練習</button>
    </div>
  );
};
