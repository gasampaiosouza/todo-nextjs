import Loader from 'react-loader';

const Loading: React.FC = () => {
  return (
    <Loader
      loaded={false}
      lines={6}
      length={5}
      radius={8}
      color="#fcfcfd"
      speed={2}
      trail={30}
      zIndex={2e9}
      // top="50%"
      // left="50%"
    />
  );
};

export default Loading;
