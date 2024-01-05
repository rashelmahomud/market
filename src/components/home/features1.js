import styles from "../../../styles/features1.module.css";

import Image from "next/image";
import img1 from "../../../public/new-project/featured1-min.jpg";
import img2 from "../../../public/new-project/featured2-min.jpg";

export const Features1 = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center p-10">
      {/* <Image src={img1} width={500} height={100} alt='features img' />
			<Image src={img2} width={500} height={100} alt='features img' /> */}

      <div className={styles.gridwork}>
        <figure className={styles.effectapollo}>
          <Image src={img2} width={500} height={100} alt="features img" />

          <figcaption>
            {/* <h2>Strong <span>Apollo</span></h2>
						<p>Apollo's last game of pool was so strange.</p>
						<a href="#">View more</a> */}
          </figcaption>
        </figure>
        <figure className={styles.effectapollo}>
          <Image src={img1} width={500} height={100} alt="features img" />

          <figcaption></figcaption>
        </figure>
      </div>
    </div>
  );
};
