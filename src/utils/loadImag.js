//异步加载图片的函数
export const asyncLoadImag = (url) => {
    return new Promise((res,rej) => {
        const imag = new Image(); 
        imag.src = url;
        imag.onload = () => {
            res(url)
        };
        imag.onerror = () => {
            rej(new Error('无法加载图片' + url))
        }
    })
}