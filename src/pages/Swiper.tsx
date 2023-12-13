import {register} from 'swiper/element/bundle';

register();

declare module "solid-js" {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container": any;
            "swiper-slide": any;
        }
    }
}

interface IPageProps {
    enableBreakpoints?: boolean;
}


export default (props: IPageProps) => {
    const spaceBetween = 10;
    const {enableBreakpoints = false} = props;
    const onProgress = (e: any) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
    };
    const onSlideChange = (e: any) => {
        console.log('slide changed');
    };
    return (
        <swiper-container
            slides-per-view={1}
            space-between={spaceBetween}
            centered-slides={true}
            onSwiperprogress={onProgress}
            onSwiperslidechange={onSlideChange}
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>
    );
};