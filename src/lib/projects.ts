export type ProjectStatus = "Now Selling" | "Under Construction" | "Completed" | "Coming Soon";

export interface Project {
  slug: string;
  name: string;
  district: string;
  type: string;
  status: ProjectStatus;
  units: string;
  summary: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "meridian-heights",
    name: "Meridian Heights",
    district: "Downtown",
    type: "Residential tower",
    status: "Now Selling",
    units: "212 residences",
    summary: "A 38-storey tower of 1–3 bedroom homes above the downtown transit core.",
    description:
      "Meridian Heights sits directly above the downtown transit interchange, putting residents a lift ride from the core and a short walk from the financial district. Homes range from efficient one-bedrooms to full-floor three-bedroom residences, all with floor-to-ceiling glazing and private outdoor space.",
  },
  {
    slug: "alpine-vista-resort",
    name: "Alpine Vista Resort",
    district: "Blue Mountains",
    type: "Luxury hill station resort",
    status: "Under Construction",
    units: "85 luxury suites",
    summary: "Mountain escape nestled among pine forests with panoramic valley views.",
    description:
      "Alpine Vista Resort is a serene hilltop sanctuary set at 7,500 feet elevation, surrounded by ancient pine forests and overlooking misty valleys. Each luxury suite features floor-to-ceiling windows capturing sunrise vistas, private terraces with mountain views, and access to world-class spa facilities, fine dining restaurants, and scenic walking trails.",
  },
  {
    slug: "the-aldergate",
    name: "The Aldergate",
    district: "North Hills",
    type: "Boutique villas",
    status: "Now Selling",
    units: "24 villas",
    summary: "A quiet enclave of detached villas on the wooded slopes of North Hills.",
    description:
      "The Aldergate is a collection of 24 detached villas set into the wooded slopes of North Hills, each on its own landscaped lot with private garage and garden. The development preserves the site's existing tree canopy and adds a shared trailhead connecting to the North Hills reserve.",
  },
  {
    slug: "union-yards",
    name: "Union Yards",
    district: "Midtown",
    type: "Mixed-use retail & office",
    status: "Completed",
    units: "18 retail units, 6 office floors",
    summary: "An adaptive-reuse rail yard turned retail and office campus in Midtown.",
    description:
      "Union Yards converts a decommissioned rail yard in Midtown into a mixed-use campus of independent retail at street level and six floors of office space above. The original steel-frame warehouse structure was retained and restored rather than demolished.",
  },
  {
    slug: "willowmere-park",
    name: "Willowmere Park",
    district: "Eastern Suburbs",
    type: "Gated residential community",
    status: "Coming Soon",
    units: "180 homes (planned)",
    summary: "A planned community of townhomes and single-family homes around a central park.",
    description:
      "Willowmere Park is a planned community of 180 townhomes and single-family homes arranged around a central park, a resident clubhouse, and a K-8 school site reserved for the district. Site works begin next quarter, with the first phase of homes released for sale shortly after.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
