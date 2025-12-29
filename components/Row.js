import {
  Truck,
  DollarSign,
  LifeBuoy,
  CheckSquare,
} from "lucide-react";

export default function StoreFeatures() {
  return (
    <section className="store-features">
      <div className="store-features__container">
        
        <div className="store-features__item">
          <Truck className="store-features__icon" />
          <p className="store-features__text">
            DELIVERY ALL OVER LEBANON
          </p>
        </div>

        <div className="store-features__item">
          <DollarSign className="store-features__icon" />
          <p className="store-features__text">
            CASH ON DELIVERY
          </p>
        </div>

        <div className="store-features__item">
          <LifeBuoy className="store-features__icon" />
          <p className="store-features__text">
            SUPPORT 24/7
          </p>
        </div>

        <div className="store-features__item">
          <CheckSquare className="store-features__icon" />
          <p className="store-features__text">
            WARRANTY ON PRODUCTS
          </p>
        </div>

      </div>
    </section>
  );
}
