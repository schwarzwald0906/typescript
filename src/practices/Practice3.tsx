export const Practice3 = () => {
  const calcTaxAmount = (tax: number): number => {
    let total = tax * 1.1;
    return total;
  };

  const onClickPractice = () => {
    let total: number = calcTaxAmount(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題②</p>
      <button onClick={onClickPractice}>練習</button>
    </div>
  );
};
