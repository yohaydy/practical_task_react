import treeData from "../response_data";

export default () => {
  const categories = treeData.categories.map(cat => {
    return {
      id: cat.id,
      name: cat.name
    };
  });

  let brands = [];
  treeData.categories.forEach(cat => {
    cat.brands.forEach(brand => {
      brands.push({
        id: brand.id,
        name: brand.name,
        categoryId: cat.id
      });
    });
  });

  let products = [];
  treeData.categories.forEach(cat => {
    cat.brands.forEach(brand => {
      brand.products.forEach(prod => {
        products.push({
          id: prod.id,
          name: prod.name,
          brandId: brand.id
        });
      });
    });
  });

  return { categories, brands, products };
};
