import classes from './BenefitItem.module.scss'
export default function BenefitItem({ heading, children, image }) {
    return (
        <div className={classes['benefit-wrapper']}>
            <h3 className={classes["benefit-wrapper__heading"]}>
                {heading}
                <span className={classes["blurred-circle"]}>
                    <div className="blur"></div>{image}
                </span>
            </h3>
            <p className={classes["benefit-wrapper__description"]}>
                {children}
            </p>
        </div>
    )
}