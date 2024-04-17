import classes from './BenefitItem.module.css'
import './BenefitItem.module.css'
export default function BenefitItem({ heading, children, number }) {
    return (
        <div className={classes['benefit-wrapper']}>
            <h3 className={classes["benefit-wrapper__heading"]}>
                {heading}
                <span className={classes["blurred-circle"]}>
                    {number}
                </span>
            </h3>
            <p className={classes["benefit-wrapper__description"]}>
                {children}
            </p>
        </div>
    )
}