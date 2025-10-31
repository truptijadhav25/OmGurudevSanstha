import React from "react";
import { useTranslation } from "react-i18next";
import "./Partners.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Partners = () => {
  const { t } = useTranslation();

  const partnersData = [
    {
      logo: "/synthex.avif",
      name: t("partners.list.synthex.name"),
      type: t("partners.list.synthex.type"),
      description: t("partners.list.synthex.description")
    },
    {
      logo: "/Arnaa-logo.png",
      name: t("partners.list.aarna.name"),
      type: t("partners.list.aarna.type"),
      description: t("partners.list.aarna.description")
    },
    {
      logo: "/perfect.png",
      name: t("partners.list.perfect.name"),
      type: t("partners.list.perfect.type"),
      description: t("partners.list.perfect.description")
    },
    {
      logo: "/Truth_take.png",
      name: t("partners.list.truth.name"),
      type: t("partners.list.truth.type"),
      description: t("partners.list.truth.description")
    }
  ];

  return (
    <section id="partners" className="partners-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-3">{t("partners.title")}</h2>
        <p className="section-subtitle mb-5">{t("partners.subtitle")}</p>
        <div className="row justify-content-center">
          {partnersData.map((partner, index) => (
            <div className="col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-4" key={index}>
              <div
                className="partner-card h-100 fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-body text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo mb-3"
                  />
                  <h5 className="card-title">{partner.name}</h5>
                  <span className="partner-type mb-2">{partner.type}</span>
                  <p className="card-text">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
