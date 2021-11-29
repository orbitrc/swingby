import { useNavigate as reactUseNavigate, } from 'react-router-dom';
function useNavigate() {
    const reactNavigate = reactUseNavigate();
    return function navigate(to, options) {
        if (typeof to === 'number') {
            reactNavigate(to);
        }
        else {
            reactNavigate(to, options);
        }
    };
}
export { useNavigate, };
