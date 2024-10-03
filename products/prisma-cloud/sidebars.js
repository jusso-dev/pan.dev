module.exports = {
  prismacloudapi: [
    "prisma-cloud/api/api-reference-home",
    {
      type: "category",
      label: "Cloud Security",
      collapsed: true,
      items: [
        "prisma-cloud/api/cspm/cspm-api",
        "prisma-cloud/api/cspm/api-urls",
        "prisma-cloud/api/cspm/api-headers",
        "prisma-cloud/api/cspm/rate-limits",
        "prisma-cloud/api/cspm/api-time-range-model",
        "prisma-cloud/api/cspm/api-integration-config",
        "prisma-cloud/api/cspm/api-errors",
        require("./api/cspm/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Runtime Security",
      collapsed: true,
      items: [
        "prisma-cloud/api/cwpp/cwpp-home",
        "prisma-cloud/api/cwpp/access-api-saas",
        "prisma-cloud/api/cwpp/stable-endpoints",
        require("./api/cwpp/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Application Security",
      collapsed: true,
      items: [
        "prisma-cloud/api/code/code",
        "prisma-cloud/api/code/basic-request",
        "prisma-cloud/api/code/api-headers",
        require("./api/code/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Data Security Posture Management",
      collapsed: true,
      items: [
        "prisma-cloud/api/dspm/get-started",
        "prisma-cloud/api/dspm/access-api",
        "prisma-cloud/api/dspm/api-urls",
        require("./api/dspm/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Managed Security Service Provider (MSSP)",
      collapsed: true,
      items: [require("./api/mssp/sidebar")],
    },
  ],
  clouddocs: [
    "prisma-cloud/docs/home",
    {
      type: "category",
      label: "Cloud Security",
      items: [
        {
          type: "autogenerated",
          dirName: "prisma-cloud/docs/cspm",
        },
      ],
    },
    {
      type: "category",
      label: "Runtime Security",
      items: [
        {
          type: "autogenerated",
          dirName: "prisma-cloud/docs/cwpp",
        },
      ],
    },
    {
      type: "category",
      label: "Other Documentation",
      items: [
        {
          type: "link",
          label: "Administrator's Guide (Enterprise Edition - Classic)",
          href: "https://docs.prismacloud.io/en/classic/cspm-admin-guide",
        },
        {
          type: "link",
          label: "Content Collections (Enterprise Edition)",
          href: "https://docs.prismacloud.io/en/enterprise-edition/content-collections",
        },

        {
          type: "link",
          label: "Release Information",
          href: "https://docs.prismacloud.io/en/enterprise-edition/rn",
        },
        {
          type: "link",
          label: "Resource Query Language (RQL)",
          href: "https://docs.prismacloud.io/en/classic/rql-reference",
        },
        {
          type: "link",
          label: "Use twistcli",
          href: "https://docs.prismacloud.io/en/enterprise-edition/content-collections/runtime-security/tools/twistcli",
        },
        {
          type: "category",
          label: "RQL",
          items: [
            {
              type: "autogenerated",
              dirName: "prisma-cloud/docs/rql",
            },
          ],
        },
        {
          type: "category",
          label: "Terraform Provider",
          items: [
            {
              type: "autogenerated",
              dirName: "prisma-cloud/docs/tf",
            },
          ],
        },
        {
          type: "category",
          label: "Compute 32.00",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.prismacloud.io/en/compute-edition/32/admin-guide",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.prismacloud.io/en/compute-edition/32/rn/release-information/release-notes-32-00",
            },
          ],
        },
        {
          type: "category",
          label: "Compute 31.03",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.prismacloud.io/en/compute-edition/31/admin-guide",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.prismacloud.io/en/compute-edition/31/rn/release-information/release-notes-31-03-update3",
            },
          ],
        },
        {
          type: "category",
          label: "Compute 30.03",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.prismacloud.io/en/compute-edition/30/admin-guide",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.prismacloud.io/en/compute-edition/30/rn/release-information/release-notes-30-03-update3",
            },
          ],
        },
        {
          type: "category",
          label: "Runtime Security",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.prismacloud.io/en/enterprise-edition/content-collections",
            },
          ],
        },
      ],
    },
  ],
};
