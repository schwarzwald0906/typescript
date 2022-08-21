export const Practice2 = () => {
  const calcTaxAmount = (tax: number): number => {
    return tax * 1.1;
  };

  const onClickPractice = () => {
    console.log(calcTaxAmount(1000));
  };
  return (
    <div>
      <p>練習問題②</p>
      <button onClick={onClickPractice}>練習</button>
    </div>
  );
};
