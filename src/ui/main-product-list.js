import { Link, Navigate } from 'react-router-dom';
import MainProduct from '../components/mainProduct';
import productData from '../productData';

export default function MainProductList() {
  return (
    <>
      {productData.map((data) => (
        <MainProduct props={data} />
      ))}
    </>
  );
}
