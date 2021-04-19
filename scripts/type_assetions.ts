const site: unknown = "www.google.com.br ";

const sitesFavoritos: string[] = [];

// sitesFavoritos.push(site as string);
sitesFavoritos.push(<string>site);

console.log(sitesFavoritos);
