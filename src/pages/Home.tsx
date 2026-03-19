import ProductList from "../features/products/components/ProductList";

const Home = () => {
    return (
        <>
            <div>
                <h1 className="text-2xl font-bold p-4">Catálogo</h1>

                <ProductList />
            </div>
        </>
    )
}

export default Home;
