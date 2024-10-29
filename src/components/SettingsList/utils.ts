export const formatName = (isCurrent:boolean) => {
    return `${isCurrent ? 'Pulse current' : 'Direct current'} - mA`
}