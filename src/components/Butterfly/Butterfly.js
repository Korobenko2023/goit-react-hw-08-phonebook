import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideButterfly } from "redux/butterfly/butterflySlice";
import { selectButterfly } from "redux/butterfly/selectors";

export const Butterfly = () => {
    const isVisible = useSelector(selectButterfly);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isVisible) {
            const timeoutId = setTimeout(() => {
                dispatch(hideButterfly());
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [isVisible, dispatch]);

    return (
        <>
            {isVisible && (
                <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'url(public/image/butterfly.jpg) no-repeat',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                />
            )}
        </>
    );
};
