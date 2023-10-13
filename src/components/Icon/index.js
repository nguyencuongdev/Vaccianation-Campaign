import Images from '~/assets/images';

export const IconHome = ({ width = '24px', height = '24px', className }) => {
    return (
        <img src={Images.home} className={className} alt='Logo-homeIcon' width={width} height={height} />
    )
}
