import path from 'path';

export default {
  entry: './src/index.js', // 진입점(entry point) 설정
  output: {
    path: path.resolve(__dirname, 'build'), // 번들링된 파일 출력 경로
    filename: 'bundle.js', // 번들링된 파일 이름
    publicPath: '/', // 정적 파일 경로 설정 (옵션)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JavaScript 및 JSX 파일을 처리하는 로더 설정
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // JavaScript 파일을 번들링하기 위해 Babel 사용
        },
      },
      {
        test: /\.css$/, // CSS 파일을 번들링하기 위한 로더 설정
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 이미지 파일을 번들링하기 위한 로더 설정
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 자주 사용하는 파일 확장자에 대한 설정 (옵션)
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // 개발 서버의 정적 파일 경로 설정 (옵션)
    compress: true,
    port: 3000, 
    historyApiFallback: true, // React Router와 같은 클라이언트 사이드 라우팅을 위한 설정 (옵션)
  },
};


