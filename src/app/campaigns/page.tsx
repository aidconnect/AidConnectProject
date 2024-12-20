import styles from "./campaigns.module.css"
import Image from "next/image"
import CampaignsPage from "./campaigns";
import Link from "next/link";

export default async function Campaigns(){
    return(
        <>
            <div className={styles.canvas}>
                <title>AidConnect丨Campaigns</title>
                <div className={styles.top}>
                    <div className={styles.one}>
                        <div className={styles.circle}>
                            <Link className={styles.home} href={"/"}>
                                <Image className={styles.logo} priority={true} src={"/AidConnect Icon1.png"} width={500} height={250} alt="AidConnect"/>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.two}></div>
                    <div className={styles.three}>
                        <h1>Campaigns</h1>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <CampaignsPage/>
                </div>
            </div>
        </>
    )
}