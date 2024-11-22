import { ProductCard } from "../card";
import { NoSearchResults } from "../noSearchResults";

export const Products = async ({ parentSlug, products }) => {
  return (
    <section className="grid grid-cols-2 gap-10 pb-10 sm:grid-cols-3 md:grid-cols-4">
      {products.length === 0 ? (
        <div className="col-span-full flex items-center justify-center text-center">
          <NoSearchResults />
        </div>
      ) : (
        products.map((product, index) => (
          <ProductCard parentSlug={parentSlug} product={product} key={index} />
        ))
      )}
    </section>
  );
};
