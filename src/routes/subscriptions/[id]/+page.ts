export const load = async ({ fetch, params }) => {
  try {
    const subResponse = await fetch(`/api/subs/${params.id}`)

    if (!subResponse.ok) {
      throw Error('No pudimos cargar tu suscripcion, por faavor intenta denuevo')
    }

    const data = await subResponse.json()
    return {
      subscription: data[0]
    }
  } catch (er) {
    console.log('Error: ', er)
  }
}