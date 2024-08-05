import TokenBlock from '../../atoms/TokenBlock';

function TokenBlockGroup() {
  const data: any = {
    '1': { price: '$30', tokens: '10', pricePerToken: '$3/token' },
    '2': { price: '$50', tokens: '25', pricePerToken: '$2.9/token' },
    '3': { price: '$100', tokens: '50', pricePerToken: '$2.8/token' },
    '4': { price: '$200', tokens: '100', pricePerToken: '$2.7/token' },
    '5': { price: '$400', tokens: '250', pricePerToken: '$2.6/token' },
    '6': { price: '$600', tokens: '500', pricePerToken: '$2.5/token' },
    '7': { price: '$800', tokens: '1000', pricePerToken: '$2.4/token' },
    '8': { price: '$1000', tokens: '2000', pricePerToken: '$2.3/token' },
  };
  const items = Object.keys(data).map((key) => {
    const { price, tokens, pricePerToken } = data[key];
    return (
      <div className="col-span-6 lg:col-span-3 max-w-full px-[4px] md:px-3">
        <TokenBlock
          price={price}
          tokens={tokens}
          pricePerToken={pricePerToken}
        />
      </div>
    );
  });
  return <>{items}</>;
}

export default TokenBlockGroup;
