exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic('No hubo resultados ', resultado.errors);
  }

  // Si hay páginas, crear los archivos
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/habitacionTemplate.jsx'),
      context: {
        slug: habitacion.slug
      }
    })
  });
}
