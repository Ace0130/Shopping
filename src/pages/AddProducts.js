import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <head>
        <title>상품등록 - 관리자 페이지</title>
      </head>
      <div className="flex flex-wrap items-center h-full">
        <h1>상품등록 - 관리자페이지</h1>
        {/* 상품등록 큰 틀 */}
        <form
          className=""
          name="addProductsForm"
          method="post"
          encType="multipart/form-data"
          action=""
        >
          {/* 상품 정보 등록(입력) 칸 */}
          <fieldset>
            <div>
              <label className="block mb-1" for="pictureUrl">
                사진
              </label>
              <input className="mb-4" type="file" picture="pictureUrl" />
              <br>"이미지를 변경하고자 할 때 만 등록하시오."</br>
            </div>

            <div>
              <label className="block mb-1" for="product_name">
                상품명
              </label>
              <input
                className="mb-4"
                type="text"
                productName="product_name"
                placeholder="상품명 입력"
              />
            </div>

            <div>
              <label className="block mb-1" for="price">
                가격
              </label>
              <input
                className="mb-4"
                type="text"
                productPrice="price"
                placeholder="상품가격 입력"
              />
              원
            </div>
          </fieldset>
          {/* */}
          <div>
            <input
              className=""
              type="submit"
              value="등록"
              onClick={() => {
                axios
                  .post("/product/new")
                  .then((result) => {
                    console.log(result);
                  })
                  .catch(() => {
                    console.log("전송 실패");
                  });
              }}
            />

            <input className="" type="reset" value="다시 작성" />
            <input className="" type="button" value="상품목록" onClick="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
