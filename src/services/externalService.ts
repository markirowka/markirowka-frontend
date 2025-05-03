
export async function validateUnp(unp: number | string): Promise<boolean> {
    return true // Временно, пока ищем url
    return new Promise((resolve) => {
        const url = `https://grp.nalog.gov.by/api/grp-public/data?unp=${unp}&charset=UTF-8&type=json`;
        fetch(url)
            .then(res => {
                if (res.ok) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch((e) => {
                console.log(e);
                resolve(false);
            });
    });
}