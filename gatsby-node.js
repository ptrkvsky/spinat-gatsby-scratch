// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve('./src/templates/Project.jsx');
  const serviceTemplate = require.resolve('./src/templates/Service.jsx');
  const categoryTemplate = require.resolve('./src/templates/Category.jsx');

  const result = await wrapper(
    graphql(`
      {
        allPrismicProjects {
          edges {
            node {
              data {
                categories {
                  category {
                    slug
                  }
                }
              }
              uid
            }
          }
        }
        allPrismicServices {
          edges {
            node {
              uid
            }
          }
        }
      }
    `)
  );

  const categorySet = new Set();
  const projectsList = result.data.allPrismicProjects.edges;
  const servicesList = result.data.allPrismicServices.edges;

  // Double check that the project has a category assigned
  projectsList.forEach(edge => {
    if (edge.node.data.categories[0].category) {
      edge.node.data.categories.forEach(cat => {
        categorySet.add(cat.category.slug);
      });
    }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/projet/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    });
  });

  servicesList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/service/${edge.node.uid}`,
      component: serviceTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    });
  });

  const categoryList = Array.from(categorySet);

  categoryList.forEach(category => {
    createPage({
      path: `/categories/${category}`,
      component: categoryTemplate,
      context: {
        category,
      },
    });
  });
};
