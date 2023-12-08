import classNames from 'classnames';
import styles from './header.module.scss';
import { motion } from 'framer-motion';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            <h2 className={styles.header}>Ammar Ghazal</h2>
            <h4>Software Engineer
            </h4>
            <svg
                height="4"
                viewBox="0 0 204 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.line}
            >
                <path
                    d="M2 2L202 1.99998"
                    stroke="url(#paint0_linear_6_519)"
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_6_519"
                        x1="202.5"
                        y1="2"
                        x2="0.999995"
                        y2="2"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#DC3284" />
                        <stop offset="1" stop-color="#DC3232" />
                    </linearGradient>
                </defs>
            </svg>
            <nav><a href="/home" className={styles['nav-link']}>Experience</a><a href="/projects" className={styles['nav-link']}>Projects</a><a href="/contact" className={styles['nav-link']}>Contact</a></nav>
        </div></div>;
};
