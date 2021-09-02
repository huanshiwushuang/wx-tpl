const fse = require('fs-extra');
const axios = require('axios');


const json = [
	{
		"name": "1-Naph",
		"filename": "1-Naph.cdxml"
	},
	{
		"name": "2-4DCZ",
		"filename": "2-4DCZ.cdxml"
	},
	{
		"name": "2-6Clb",
		"filename": "2-6Clb.cdxml"
	},
	{
		"name": "2-6DCZ",
		"filename": "2-6DCZ.cdxml"
	},
	{
		"name": "2-Naph",
		"filename": "2-Naph.cdxml"
	},
	{
		"name": "2Abz",
		"filename": "2Abz.cdxml"
	},
	{
		"name": "2BZ",
		"filename": "2BZ.cdxml"
	},
	{
		"name": "2CZ",
		"filename": "2CZ.cdxml"
	},
	{
		"name": "2OHEt",
		"filename": "2OHEt.cdxml"
	},
	{
		"name": "2OHPh",
		"filename": "2OHPh.cdxml"
	},
	{
		"name": "2Pip",
		"filename": "2Pip.cdxml"
	},
	{
		"name": "3'",
		"filename": "3&apos;.cdxml"
	},
	{
		"name": "3Py",
		"filename": "3Py.cdxml"
	},
	{
		"name": "4Abz",
		"filename": "4Abz.cdxml"
	},
	{
		"name": "4BZ",
		"filename": "4BZ.cdxml"
	},
	{
		"name": "4CZ",
		"filename": "4CZ.cdxml"
	},
	{
		"name": "4Py",
		"filename": "4Py.cdxml"
	},
	{
		"name": "5'",
		"filename": "5&apos;.cdxml"
	},
	{
		"name": "5Urd",
		"filename": "5Urd.cdxml"
	},
	{
		"name": "AAla",
		"filename": "AAla.cdxml"
	},
	{
		"name": "Aac",
		"filename": "Aac.cdxml"
	},
	{
		"name": "Aad",
		"filename": "Aad.cdxml"
	},
	{
		"name": "Abu",
		"filename": "Abu.cdxml"
	},
	{
		"name": "Abz",
		"filename": "Abz.cdxml"
	},
	{
		"name": "Ac",
		"filename": "Ac.cdxml"
	},
	{
		"name": "AcO",
		"filename": "AcO.cdxml"
	},
	{
		"name": "Aca",
		"filename": "Aca.cdxml"
	},
	{
		"name": "Acm",
		"filename": "Acm.cdxml"
	},
	{
		"name": "Ad",
		"filename": "Ad.cdxml"
	},
	{
		"name": "Adc",
		"filename": "Adc.cdxml"
	},
	{
		"name": "Adoc",
		"filename": "Adoc.cdxml"
	},
	{
		"name": "Aet",
		"filename": "Aet.cdxml"
	},
	{
		"name": "Ahx",
		"filename": "Ahx.cdxml"
	},
	{
		"name": "Aib",
		"filename": "Aib.cdxml"
	},
	{
		"name": "Ala",
		"filename": "Ala.cdxml"
	},
	{
		"name": "All",
		"filename": "All.cdxml"
	},
	{
		"name": "Alloc",
		"filename": "Alloc.cdxml"
	},
	{
		"name": "Allyl",
		"filename": "Allyl.cdxml"
	},
	{
		"name": "Am",
		"filename": "Am.cdxml"
	},
	{
		"name": "Amoc",
		"filename": "Amoc.cdxml"
	},
	{
		"name": "Aoc",
		"filename": "Aoc.cdxml"
	},
	{
		"name": "Ape",
		"filename": "Ape.cdxml"
	},
	{
		"name": "Apm",
		"filename": "Apm.cdxml"
	},
	{
		"name": "App",
		"filename": "App.cdxml"
	},
	{
		"name": "Arg",
		"filename": "Arg.cdxml"
	},
	{
		"name": "Asn",
		"filename": "Asn.cdxml"
	},
	{
		"name": "Asp",
		"filename": "Asp.cdxml"
	},
	{
		"name": "Asu",
		"filename": "Asu.cdxml"
	},
	{
		"name": "Asx",
		"filename": "Asx.cdxml"
	},
	{
		"name": "Aze",
		"filename": "Aze.cdxml"
	},
	{
		"name": "Azoc",
		"filename": "Azoc.cdxml"
	},
	{
		"name": "BOM",
		"filename": "BOM.cdxml"
	},
	{
		"name": "BTC",
		"filename": "BTC.cdxml"
	},
	{
		"name": "Bac",
		"filename": "Bac.cdxml"
	},
	{
		"name": "Bal",
		"filename": "Bal.cdxml"
	},
	{
		"name": "Bam",
		"filename": "Bam.cdxml"
	},
	{
		"name": "Bas",
		"filename": "Bas.cdxml"
	},
	{
		"name": "Benzoyl",
		"filename": "Benzoyl.cdxml"
	},
	{
		"name": "Benzyl",
		"filename": "Benzyl.cdxml"
	},
	{
		"name": "Beoc",
		"filename": "Beoc.cdxml"
	},
	{
		"name": "Bhoc",
		"filename": "Bhoc.cdxml"
	},
	{
		"name": "Bic",
		"filename": "Bic.cdxml"
	},
	{
		"name": "Bly",
		"filename": "Bly.cdxml"
	},
	{
		"name": "Bmv",
		"filename": "Bmv.cdxml"
	},
	{
		"name": "Bn",
		"filename": "Bn.cdxml"
	},
	{
		"name": "Bnps",
		"filename": "Bnps.cdxml"
	},
	{
		"name": "Boc",
		"filename": "Boc.cdxml"
	},
	{
		"name": "Bocae",
		"filename": "Bocae.cdxml"
	},
	{
		"name": "Bpoc",
		"filename": "Bpoc.cdxml"
	},
	{
		"name": "Bs",
		"filename": "Bs.cdxml"
	},
	{
		"name": "Bt",
		"filename": "Bt.cdxml"
	},
	{
		"name": "Btm",
		"filename": "Btm.cdxml"
	},
	{
		"name": "Bu",
		"filename": "Bu.cdxml"
	},
	{
		"name": "Bua",
		"filename": "Bua.cdxml"
	},
	{
		"name": "Bum",
		"filename": "Bum.cdxml"
	},
	{
		"name": "Bux",
		"filename": "Bux.cdxml"
	},
	{
		"name": "Bz",
		"filename": "Bz.cdxml"
	},
	{
		"name": "BzOM",
		"filename": "BzOM.cdxml"
	},
	{
		"name": "Bza",
		"filename": "Bza.cdxml"
	},
	{
		"name": "Bzh",
		"filename": "Bzh.cdxml"
	},
	{
		"name": "Bzl",
		"filename": "Bzl.cdxml"
	},
	{
		"name": "C10H20",
		"filename": "C10H20.cdxml"
	},
	{
		"name": "C10H21",
		"filename": "C10H21.cdxml"
	},
	{
		"name": "C11H22",
		"filename": "C11H22.cdxml"
	},
	{
		"name": "C11H23",
		"filename": "C11H23.cdxml"
	},
	{
		"name": "C12H24",
		"filename": "C12H24.cdxml"
	},
	{
		"name": "C12H25",
		"filename": "C12H25.cdxml"
	},
	{
		"name": "C13H26",
		"filename": "C13H26.cdxml"
	},
	{
		"name": "C13H27",
		"filename": "C13H27.cdxml"
	},
	{
		"name": "C14H28",
		"filename": "C14H28.cdxml"
	},
	{
		"name": "C14H29",
		"filename": "C14H29.cdxml"
	},
	{
		"name": "C15H30",
		"filename": "C15H30.cdxml"
	},
	{
		"name": "C15H31",
		"filename": "C15H31.cdxml"
	},
	{
		"name": "C16H32",
		"filename": "C16H32.cdxml"
	},
	{
		"name": "C16H33",
		"filename": "C16H33.cdxml"
	},
	{
		"name": "C17H34",
		"filename": "C17H34.cdxml"
	},
	{
		"name": "C17H35",
		"filename": "C17H35.cdxml"
	},
	{
		"name": "C18H36",
		"filename": "C18H36.cdxml"
	},
	{
		"name": "C18H37",
		"filename": "C18H37.cdxml"
	},
	{
		"name": "C19H38",
		"filename": "C19H38.cdxml"
	},
	{
		"name": "C19H39",
		"filename": "C19H39.cdxml"
	},
	{
		"name": "C20H40",
		"filename": "C20H40.cdxml"
	},
	{
		"name": "C20H41",
		"filename": "C20H41.cdxml"
	},
	{
		"name": "C2H4",
		"filename": "C2H4.cdxml"
	},
	{
		"name": "C2H5",
		"filename": "C2H5.cdxml"
	},
	{
		"name": "C3H6",
		"filename": "C3H6.cdxml"
	},
	{
		"name": "C3H7",
		"filename": "C3H7.cdxml"
	},
	{
		"name": "C4H8",
		"filename": "C4H8.cdxml"
	},
	{
		"name": "C4H9",
		"filename": "C4H9.cdxml"
	},
	{
		"name": "C5H10",
		"filename": "C5H10.cdxml"
	},
	{
		"name": "C5H11",
		"filename": "C5H11.cdxml"
	},
	{
		"name": "C6H12",
		"filename": "C6H12.cdxml"
	},
	{
		"name": "C6H13",
		"filename": "C6H13.cdxml"
	},
	{
		"name": "C6H5",
		"filename": "C6H5.cdxml"
	},
	{
		"name": "C7H14",
		"filename": "C7H14.cdxml"
	},
	{
		"name": "C7H15",
		"filename": "C7H15.cdxml"
	},
	{
		"name": "C8H16",
		"filename": "C8H16.cdxml"
	},
	{
		"name": "C8H17",
		"filename": "C8H17.cdxml"
	},
	{
		"name": "C9H18",
		"filename": "C9H18.cdxml"
	},
	{
		"name": "C9H19",
		"filename": "C9H19.cdxml"
	},
	{
		"name": "CF3",
		"filename": "CF3.cdxml"
	},
	{
		"name": "COOCH3",
		"filename": "COOCH3.cdxml"
	},
	{
		"name": "Cac",
		"filename": "Cac.cdxml"
	},
	{
		"name": "Cap",
		"filename": "Cap.cdxml"
	},
	{
		"name": "Cbm",
		"filename": "Cbm.cdxml"
	},
	{
		"name": "Cbs",
		"filename": "Cbs.cdxml"
	},
	{
		"name": "Cbz",
		"filename": "Cbz.cdxml"
	},
	{
		"name": "Cdf",
		"filename": "Cdf.cdxml"
	},
	{
		"name": "Ceoc",
		"filename": "Ceoc.cdxml"
	},
	{
		"name": "Cha",
		"filename": "Cha.cdxml"
	},
	{
		"name": "Chb",
		"filename": "Chb.cdxml"
	},
	{
		"name": "Chc",
		"filename": "Chc.cdxml"
	},
	{
		"name": "Chp",
		"filename": "Chp.cdxml"
	},
	{
		"name": "Chxa",
		"filename": "Chxa.cdxml"
	},
	{
		"name": "Cit",
		"filename": "Cit.cdxml"
	},
	{
		"name": "CoA",
		"filename": "CoA.cdxml"
	},
	{
		"name": "Cpc",
		"filename": "Cpc.cdxml"
	},
	{
		"name": "Cpe",
		"filename": "Cpe.cdxml"
	},
	{
		"name": "Cpm",
		"filename": "Cpm.cdxml"
	},
	{
		"name": "Cy",
		"filename": "Cy.cdxml"
	},
	{
		"name": "Cya",
		"filename": "Cya.cdxml"
	},
	{
		"name": "Cys",
		"filename": "Cys.cdxml"
	},
	{
		"name": "DEAE",
		"filename": "DEAE.cdxml"
	},
	{
		"name": "DEIPS",
		"filename": "DEIPS.cdxml"
	},
	{
		"name": "DMB",
		"filename": "DMB.cdxml"
	},
	{
		"name": "DMIPS",
		"filename": "DMIPS.cdxml"
	},
	{
		"name": "DMPM",
		"filename": "DMPM.cdxml"
	},
	{
		"name": "DMPS",
		"filename": "DMPS.cdxml"
	},
	{
		"name": "DMTr",
		"filename": "DMTr.cdxml"
	},
	{
		"name": "DNAA",
		"filename": "DNAA.cdxml"
	},
	{
		"name": "DNAC",
		"filename": "DNAC.cdxml"
	},
	{
		"name": "DNAG",
		"filename": "DNAG.cdxml"
	},
	{
		"name": "DNAT",
		"filename": "DNAT.cdxml"
	},
	{
		"name": "DNP",
		"filename": "DNP.cdxml"
	},
	{
		"name": "DNPS",
		"filename": "DNPS.cdxml"
	},
	{
		"name": "DNS",
		"filename": "DNS.cdxml"
	},
	{
		"name": "DPIPS",
		"filename": "DPIPS.cdxml"
	},
	{
		"name": "DPTBS",
		"filename": "DPTBS.cdxml"
	},
	{
		"name": "DTBMS",
		"filename": "DTBMS.cdxml"
	},
	{
		"name": "DTBS",
		"filename": "DTBS.cdxml"
	},
	{
		"name": "Dab",
		"filename": "Dab.cdxml"
	},
	{
		"name": "Dan",
		"filename": "Dan.cdxml"
	},
	{
		"name": "Dap",
		"filename": "Dap.cdxml"
	},
	{
		"name": "Dbpoc",
		"filename": "Dbpoc.cdxml"
	},
	{
		"name": "Ddz",
		"filename": "Ddz.cdxml"
	},
	{
		"name": "De",
		"filename": "De.cdxml"
	},
	{
		"name": "Dec",
		"filename": "Dec.cdxml"
	},
	{
		"name": "Dha",
		"filename": "Dha.cdxml"
	},
	{
		"name": "Dip",
		"filename": "Dip.cdxml"
	},
	{
		"name": "Dmoc",
		"filename": "Dmoc.cdxml"
	},
	{
		"name": "Dmt",
		"filename": "Dmt.cdxml"
	},
	{
		"name": "Dpm",
		"filename": "Dpm.cdxml"
	},
	{
		"name": "Dpp",
		"filename": "Dpp.cdxml"
	},
	{
		"name": "Dpr",
		"filename": "Dpr.cdxml"
	},
	{
		"name": "Dsu",
		"filename": "Dsu.cdxml"
	},
	{
		"name": "Eac",
		"filename": "Eac.cdxml"
	},
	{
		"name": "Edc",
		"filename": "Edc.cdxml"
	},
	{
		"name": "Eoc",
		"filename": "Eoc.cdxml"
	},
	{
		"name": "Et",
		"filename": "Et.cdxml"
	},
	{
		"name": "FRNAA",
		"filename": "FRNAA.cdxml"
	},
	{
		"name": "FRNAC",
		"filename": "FRNAC.cdxml"
	},
	{
		"name": "FRNAG",
		"filename": "FRNAG.cdxml"
	},
	{
		"name": "FRNAU",
		"filename": "FRNAU.cdxml"
	},
	{
		"name": "Fmoc",
		"filename": "Fmoc.cdxml"
	},
	{
		"name": "For",
		"filename": "For.cdxml"
	},
	{
		"name": "Ft",
		"filename": "Ft.cdxml"
	},
	{
		"name": "Ggu",
		"filename": "Ggu.cdxml"
	},
	{
		"name": "Gla",
		"filename": "Gla.cdxml"
	},
	{
		"name": "Glc",
		"filename": "Glc.cdxml"
	},
	{
		"name": "Gln",
		"filename": "Gln.cdxml"
	},
	{
		"name": "Glp",
		"filename": "Glp.cdxml"
	},
	{
		"name": "Glt",
		"filename": "Glt.cdxml"
	},
	{
		"name": "Glu",
		"filename": "Glu.cdxml"
	},
	{
		"name": "Glx",
		"filename": "Glx.cdxml"
	},
	{
		"name": "Gly",
		"filename": "Gly.cdxml"
	},
	{
		"name": "Har",
		"filename": "Har.cdxml"
	},
	{
		"name": "Hcy",
		"filename": "Hcy.cdxml"
	},
	{
		"name": "Hex",
		"filename": "Hex.cdxml"
	},
	{
		"name": "Hippuryl",
		"filename": "Hippuryl.cdxml"
	},
	{
		"name": "His",
		"filename": "His.cdxml"
	},
	{
		"name": "Hiv",
		"filename": "Hiv.cdxml"
	},
	{
		"name": "Hph",
		"filename": "Hph.cdxml"
	},
	{
		"name": "Hse",
		"filename": "Hse.cdxml"
	},
	{
		"name": "Hva",
		"filename": "Hva.cdxml"
	},
	{
		"name": "Hyl",
		"filename": "Hyl.cdxml"
	},
	{
		"name": "Hyp",
		"filename": "Hyp.cdxml"
	},
	{
		"name": "Igl",
		"filename": "Igl.cdxml"
	},
	{
		"name": "Ile",
		"filename": "Ile.cdxml"
	},
	{
		"name": "Im",
		"filename": "Im.cdxml"
	},
	{
		"name": "Ioc",
		"filename": "Ioc.cdxml"
	},
	{
		"name": "Ipa",
		"filename": "Ipa.cdxml"
	},
	{
		"name": "Ips",
		"filename": "Ips.cdxml"
	},
	{
		"name": "Iva",
		"filename": "Iva.cdxml"
	},
	{
		"name": "Kpc",
		"filename": "Kpc.cdxml"
	},
	{
		"name": "LCSMPT",
		"filename": "LCSMPT.cdxml"
	},
	{
		"name": "LCSPDP",
		"filename": "LCSPDP.cdxml"
	},
	{
		"name": "LNAA",
		"filename": "LNAA.cdxml"
	},
	{
		"name": "LNAC",
		"filename": "LNAC.cdxml"
	},
	{
		"name": "LNAG",
		"filename": "LNAG.cdxml"
	},
	{
		"name": "LNAT",
		"filename": "LNAT.cdxml"
	},
	{
		"name": "LNAU",
		"filename": "LNAU.cdxml"
	},
	{
		"name": "Lac",
		"filename": "Lac.cdxml"
	},
	{
		"name": "Lan",
		"filename": "Lan.cdxml"
	},
	{
		"name": "Leu",
		"filename": "Leu.cdxml"
	},
	{
		"name": "Lys",
		"filename": "Lys.cdxml"
	},
	{
		"name": "MDIPS",
		"filename": "MDIPS.cdxml"
	},
	{
		"name": "MDPS",
		"filename": "MDPS.cdxml"
	},
	{
		"name": "MEM",
		"filename": "MEM.cdxml"
	},
	{
		"name": "MMTr",
		"filename": "MMTr.cdxml"
	},
	{
		"name": "MNAA",
		"filename": "MNAA.cdxml"
	},
	{
		"name": "MNAC",
		"filename": "MNAC.cdxml"
	},
	{
		"name": "MNAG",
		"filename": "MNAG.cdxml"
	},
	{
		"name": "MNAT",
		"filename": "MNAT.cdxml"
	},
	{
		"name": "MNAU",
		"filename": "MNAU.cdxml"
	},
	{
		"name": "MOB",
		"filename": "MOB.cdxml"
	},
	{
		"name": "MOM",
		"filename": "MOM.cdxml"
	},
	{
		"name": "MOS",
		"filename": "MOS.cdxml"
	},
	{
		"name": "MPM",
		"filename": "MPM.cdxml"
	},
	{
		"name": "MTM",
		"filename": "MTM.cdxml"
	},
	{
		"name": "Maa",
		"filename": "Maa.cdxml"
	},
	{
		"name": "Mal",
		"filename": "Mal.cdxml"
	},
	{
		"name": "Mba",
		"filename": "Mba.cdxml"
	},
	{
		"name": "Mbh",
		"filename": "Mbh.cdxml"
	},
	{
		"name": "Mbs",
		"filename": "Mbs.cdxml"
	},
	{
		"name": "Me",
		"filename": "Me.cdxml"
	},
	{
		"name": "MeAla",
		"filename": "MeAla.cdxml"
	},
	{
		"name": "MeOe",
		"filename": "MeOe.cdxml"
	},
	{
		"name": "Mes",
		"filename": "Mes.cdxml"
	},
	{
		"name": "Met",
		"filename": "Met.cdxml"
	},
	{
		"name": "Mhoc",
		"filename": "Mhoc.cdxml"
	},
	{
		"name": "Mhp",
		"filename": "Mhp.cdxml"
	},
	{
		"name": "Mmt",
		"filename": "Mmt.cdxml"
	},
	{
		"name": "Moz",
		"filename": "Moz.cdxml"
	},
	{
		"name": "Mpa",
		"filename": "Mpa.cdxml"
	},
	{
		"name": "Mpt",
		"filename": "Mpt.cdxml"
	},
	{
		"name": "Ms",
		"filename": "Ms.cdxml"
	},
	{
		"name": "Msc",
		"filename": "Msc.cdxml"
	},
	{
		"name": "Msi",
		"filename": "Msi.cdxml"
	},
	{
		"name": "Msp",
		"filename": "Msp.cdxml"
	},
	{
		"name": "Mtos",
		"filename": "Mtos.cdxml"
	},
	{
		"name": "Mtp",
		"filename": "Mtp.cdxml"
	},
	{
		"name": "Mts",
		"filename": "Mts.cdxml"
	},
	{
		"name": "Mtt",
		"filename": "Mtt.cdxml"
	},
	{
		"name": "Mur",
		"filename": "Mur.cdxml"
	},
	{
		"name": "Myr",
		"filename": "Myr.cdxml"
	},
	{
		"name": "Mz",
		"filename": "Mz.cdxml"
	},
	{
		"name": "N3",
		"filename": "N3.cdxml"
	},
	{
		"name": "Nabs",
		"filename": "Nabs.cdxml"
	},
	{
		"name": "Nal",
		"filename": "Nal.cdxml"
	},
	{
		"name": "Neu",
		"filename": "Neu.cdxml"
	},
	{
		"name": "Nf",
		"filename": "Nf.cdxml"
	},
	{
		"name": "Ng",
		"filename": "Ng.cdxml"
	},
	{
		"name": "Ngu",
		"filename": "Ngu.cdxml"
	},
	{
		"name": "Nis",
		"filename": "Nis.cdxml"
	},
	{
		"name": "Nle",
		"filename": "Nle.cdxml"
	},
	{
		"name": "Nm",
		"filename": "Nm.cdxml"
	},
	{
		"name": "Np",
		"filename": "Np.cdxml"
	},
	{
		"name": "Npe",
		"filename": "Npe.cdxml"
	},
	{
		"name": "Nphe",
		"filename": "Nphe.cdxml"
	},
	{
		"name": "Nps",
		"filename": "Nps.cdxml"
	},
	{
		"name": "Ns",
		"filename": "Ns.cdxml"
	},
	{
		"name": "Nva",
		"filename": "Nva.cdxml"
	},
	{
		"name": "OMeRNAA",
		"filename": "OMeRNAA.cdxml"
	},
	{
		"name": "OMeRNAC",
		"filename": "OMeRNAC.cdxml"
	},
	{
		"name": "OMeRNAG",
		"filename": "OMeRNAG.cdxml"
	},
	{
		"name": "OMeRNAT",
		"filename": "OMeRNAT.cdxml"
	},
	{
		"name": "OMeRNAU",
		"filename": "OMeRNAU.cdxml"
	},
	{
		"name": "Oct",
		"filename": "Oct.cdxml"
	},
	{
		"name": "Oic",
		"filename": "Oic.cdxml"
	},
	{
		"name": "Ole",
		"filename": "Ole.cdxml"
	},
	{
		"name": "Orn",
		"filename": "Orn.cdxml"
	},
	{
		"name": "PEG3",
		"filename": "PEG3.cdxml"
	},
	{
		"name": "PEG4",
		"filename": "PEG4.cdxml"
	},
	{
		"name": "PMB",
		"filename": "PMB.cdxml"
	},
	{
		"name": "PMBM",
		"filename": "PMBM.cdxml"
	},
	{
		"name": "PNB",
		"filename": "PNB.cdxml"
	},
	{
		"name": "PPi",
		"filename": "PPi.cdxml"
	},
	{
		"name": "Pal",
		"filename": "Pal.cdxml"
	},
	{
		"name": "Pbf",
		"filename": "Pbf.cdxml"
	},
	{
		"name": "Pbp",
		"filename": "Pbp.cdxml"
	},
	{
		"name": "Pcp",
		"filename": "Pcp.cdxml"
	},
	{
		"name": "Pen",
		"filename": "Pen.cdxml"
	},
	{
		"name": "Pfp",
		"filename": "Pfp.cdxml"
	},
	{
		"name": "Ph",
		"filename": "Ph.cdxml"
	},
	{
		"name": "Phe",
		"filename": "Phe.cdxml"
	},
	{
		"name": "Phenyl",
		"filename": "Phenyl.cdxml"
	},
	{
		"name": "Phg",
		"filename": "Phg.cdxml"
	},
	{
		"name": "Pht",
		"filename": "Pht.cdxml"
	},
	{
		"name": "Pic",
		"filename": "Pic.cdxml"
	},
	{
		"name": "Pip",
		"filename": "Pip.cdxml"
	},
	{
		"name": "Pipoc",
		"filename": "Pipoc.cdxml"
	},
	{
		"name": "Piv",
		"filename": "Piv.cdxml"
	},
	{
		"name": "Pmc",
		"filename": "Pmc.cdxml"
	},
	{
		"name": "Poc",
		"filename": "Poc.cdxml"
	},
	{
		"name": "Ppt",
		"filename": "Ppt.cdxml"
	},
	{
		"name": "Pr",
		"filename": "Pr.cdxml"
	},
	{
		"name": "Pro",
		"filename": "Pro.cdxml"
	},
	{
		"name": "Ptc",
		"filename": "Ptc.cdxml"
	},
	{
		"name": "Pv",
		"filename": "Pv.cdxml"
	},
	{
		"name": "Py",
		"filename": "Py.cdxml"
	},
	{
		"name": "Pyl",
		"filename": "Pyl.cdxml"
	},
	{
		"name": "Pyr",
		"filename": "Pyr.cdxml"
	},
	{
		"name": "Pz",
		"filename": "Pz.cdxml"
	},
	{
		"name": "QC",
		"filename": "QC.cdxml"
	},
	{
		"name": "Qu",
		"filename": "Qu.cdxml"
	},
	{
		"name": "Quin",
		"filename": "Quin.cdxml"
	},
	{
		"name": "Qxc",
		"filename": "Qxc.cdxml"
	},
	{
		"name": "RNAA",
		"filename": "RNAA.cdxml"
	},
	{
		"name": "RNAC",
		"filename": "RNAC.cdxml"
	},
	{
		"name": "RNAG",
		"filename": "RNAG.cdxml"
	},
	{
		"name": "RNAT",
		"filename": "RNAT.cdxml"
	},
	{
		"name": "RNAU",
		"filename": "RNAU.cdxml"
	},
	{
		"name": "S8",
		"filename": "S8.cdxml"
	},
	{
		"name": "SEM",
		"filename": "SEM.cdxml"
	},
	{
		"name": "SES",
		"filename": "SES.cdxml"
	},
	{
		"name": "SMCC",
		"filename": "SMCC.cdxml"
	},
	{
		"name": "SMPT",
		"filename": "SMPT.cdxml"
	},
	{
		"name": "SPDP",
		"filename": "SPDP.cdxml"
	},
	{
		"name": "SPy",
		"filename": "SPy.cdxml"
	},
	{
		"name": "Sar",
		"filename": "Sar.cdxml"
	},
	{
		"name": "Sbz",
		"filename": "Sbz.cdxml"
	},
	{
		"name": "Scm",
		"filename": "Scm.cdxml"
	},
	{
		"name": "Sec",
		"filename": "Sec.cdxml"
	},
	{
		"name": "Ser",
		"filename": "Ser.cdxml"
	},
	{
		"name": "Spg",
		"filename": "Spg.cdxml"
	},
	{
		"name": "Sta",
		"filename": "Sta.cdxml"
	},
	{
		"name": "Su",
		"filename": "Su.cdxml"
	},
	{
		"name": "Suc",
		"filename": "Suc.cdxml"
	},
	{
		"name": "TBDMS",
		"filename": "TBDMS.cdxml"
	},
	{
		"name": "TBDPS",
		"filename": "TBDPS.cdxml"
	},
	{
		"name": "TBMPS",
		"filename": "TBMPS.cdxml"
	},
	{
		"name": "TBS",
		"filename": "TBS.cdxml"
	},
	{
		"name": "TBZ",
		"filename": "TBZ.cdxml"
	},
	{
		"name": "TDS",
		"filename": "TDS.cdxml"
	},
	{
		"name": "TES",
		"filename": "TES.cdxml"
	},
	{
		"name": "TFA",
		"filename": "TFA.cdxml"
	},
	{
		"name": "THF",
		"filename": "THF.cdxml"
	},
	{
		"name": "THP",
		"filename": "THP.cdxml"
	},
	{
		"name": "TIPDS",
		"filename": "TIPDS.cdxml"
	},
	{
		"name": "TIPS",
		"filename": "TIPS.cdxml"
	},
	{
		"name": "TMS",
		"filename": "TMS.cdxml"
	},
	{
		"name": "TNP",
		"filename": "TNP.cdxml"
	},
	{
		"name": "Tac",
		"filename": "Tac.cdxml"
	},
	{
		"name": "Tcboc",
		"filename": "Tcboc.cdxml"
	},
	{
		"name": "Tce",
		"filename": "Tce.cdxml"
	},
	{
		"name": "Tcp",
		"filename": "Tcp.cdxml"
	},
	{
		"name": "Tec",
		"filename": "Tec.cdxml"
	},
	{
		"name": "Teoc",
		"filename": "Teoc.cdxml"
	},
	{
		"name": "Tf",
		"filename": "Tf.cdxml"
	},
	{
		"name": "Tfe",
		"filename": "Tfe.cdxml"
	},
	{
		"name": "Tfp",
		"filename": "Tfp.cdxml"
	},
	{
		"name": "Thexyl",
		"filename": "Thexyl.cdxml"
	},
	{
		"name": "Thi",
		"filename": "Thi.cdxml"
	},
	{
		"name": "Thr",
		"filename": "Thr.cdxml"
	},
	{
		"name": "Thz",
		"filename": "Thz.cdxml"
	},
	{
		"name": "Tic",
		"filename": "Tic.cdxml"
	},
	{
		"name": "Tle",
		"filename": "Tle.cdxml"
	},
	{
		"name": "Tmb",
		"filename": "Tmb.cdxml"
	},
	{
		"name": "Tmob",
		"filename": "Tmob.cdxml"
	},
	{
		"name": "Tos",
		"filename": "Tos.cdxml"
	},
	{
		"name": "Tosa",
		"filename": "Tosa.cdxml"
	},
	{
		"name": "Trit",
		"filename": "Trit.cdxml"
	},
	{
		"name": "Troc",
		"filename": "Troc.cdxml"
	},
	{
		"name": "Trp",
		"filename": "Trp.cdxml"
	},
	{
		"name": "Trs",
		"filename": "Trs.cdxml"
	},
	{
		"name": "Trt",
		"filename": "Trt.cdxml"
	},
	{
		"name": "Ts",
		"filename": "Ts.cdxml"
	},
	{
		"name": "Tyr",
		"filename": "Tyr.cdxml"
	},
	{
		"name": "Tza",
		"filename": "Tza.cdxml"
	},
	{
		"name": "Val",
		"filename": "Val.cdxml"
	},
	{
		"name": "Vi",
		"filename": "Vi.cdxml"
	},
	{
		"name": "Wil",
		"filename": "Wil.cdxml"
	},
	{
		"name": "Xaa",
		"filename": "Xaa.cdxml"
	},
	{
		"name": "Xan",
		"filename": "Xan.cdxml"
	},
	{
		"name": "Xyl",
		"filename": "Xyl.cdxml"
	},
	{
		"name": "ZNO2",
		"filename": "ZNO2.cdxml"
	},
	{
		"name": "Za",
		"filename": "Za.cdxml"
	},
	{
		"name": "Zae",
		"filename": "Zae.cdxml"
	},
	{
		"name": "Zoa",
		"filename": "Zoa.cdxml"
	},
	{
		"name": "aIle",
		"filename": "aIle.cdxml"
	},
	{
		"name": "aIso",
		"filename": "aIso.cdxml"
	},
	{
		"name": "aThr",
		"filename": "aThr.cdxml"
	},
	{
		"name": "bAad",
		"filename": "bAad.cdxml"
	},
	{
		"name": "bAla",
		"filename": "bAla.cdxml"
	},
	{
		"name": "bArg",
		"filename": "bArg.cdxml"
	},
	{
		"name": "bAsn",
		"filename": "bAsn.cdxml"
	},
	{
		"name": "bAsp",
		"filename": "bAsp.cdxml"
	},
	{
		"name": "bCys",
		"filename": "bCys.cdxml"
	},
	{
		"name": "bGln",
		"filename": "bGln.cdxml"
	},
	{
		"name": "bGlu",
		"filename": "bGlu.cdxml"
	},
	{
		"name": "bHis",
		"filename": "bHis.cdxml"
	},
	{
		"name": "bIle",
		"filename": "bIle.cdxml"
	},
	{
		"name": "bLeu",
		"filename": "bLeu.cdxml"
	},
	{
		"name": "bLys",
		"filename": "bLys.cdxml"
	},
	{
		"name": "bMet",
		"filename": "bMet.cdxml"
	},
	{
		"name": "bPhe",
		"filename": "bPhe.cdxml"
	},
	{
		"name": "bPro",
		"filename": "bPro.cdxml"
	},
	{
		"name": "bSer",
		"filename": "bSer.cdxml"
	},
	{
		"name": "bThr",
		"filename": "bThr.cdxml"
	},
	{
		"name": "bTrp",
		"filename": "bTrp.cdxml"
	},
	{
		"name": "bTyr",
		"filename": "bTyr.cdxml"
	},
	{
		"name": "bVal",
		"filename": "bVal.cdxml"
	},
	{
		"name": "c-C3H5",
		"filename": "c-C3H5.cdxml"
	},
	{
		"name": "c-C4H7",
		"filename": "c-C4H7.cdxml"
	},
	{
		"name": "c-C5H9",
		"filename": "c-C5H9.cdxml"
	},
	{
		"name": "c-C6H11",
		"filename": "c-C6H11.cdxml"
	},
	{
		"name": "c-C7H13",
		"filename": "c-C7H13.cdxml"
	},
	{
		"name": "c-C8H15",
		"filename": "c-C8H15.cdxml"
	},
	{
		"name": "c-Hx",
		"filename": "c-Hx.cdxml"
	},
	{
		"name": "cHx",
		"filename": "cHx.cdxml"
	},
	{
		"name": "chair",
		"filename": "chair.cdxml"
	},
	{
		"name": "cyclobutyl",
		"filename": "cyclobutyl.cdxml"
	},
	{
		"name": "cycloheptyl",
		"filename": "cycloheptyl.cdxml"
	},
	{
		"name": "cyclooctyl",
		"filename": "cyclooctyl.cdxml"
	},
	{
		"name": "cyclopentyl",
		"filename": "cyclopentyl.cdxml"
	},
	{
		"name": "cyclopropyl",
		"filename": "cyclopropyl.cdxml"
	},
	{
		"name": "dA",
		"filename": "dA.cdxml"
	},
	{
		"name": "dC",
		"filename": "dC.cdxml"
	},
	{
		"name": "dG",
		"filename": "dG.cdxml"
	},
	{
		"name": "dT",
		"filename": "dT.cdxml"
	},
	{
		"name": "dU",
		"filename": "dU.cdxml"
	},
	{
		"name": "i-Am",
		"filename": "i-Am.cdxml"
	},
	{
		"name": "i-Bu",
		"filename": "i-Bu.cdxml"
	},
	{
		"name": "i-BuO",
		"filename": "i-BuO.cdxml"
	},
	{
		"name": "i-C3H7",
		"filename": "i-C3H7.cdxml"
	},
	{
		"name": "i-C4H9",
		"filename": "i-C4H9.cdxml"
	},
	{
		"name": "i-C5H11",
		"filename": "i-C5H11.cdxml"
	},
	{
		"name": "i-Pr",
		"filename": "i-Pr.cdxml"
	},
	{
		"name": "iAm",
		"filename": "iAm.cdxml"
	},
	{
		"name": "iBu",
		"filename": "iBu.cdxml"
	},
	{
		"name": "iPr",
		"filename": "iPr.cdxml"
	},
	{
		"name": "lBop",
		"filename": "lBop.cdxml"
	},
	{
		"name": "m-C6H4",
		"filename": "m-C6H4.cdxml"
	},
	{
		"name": "m-Phenylene",
		"filename": "m-Phenylene.cdxml"
	},
	{
		"name": "m-Tolyl",
		"filename": "m-Tolyl.cdxml"
	},
	{
		"name": "mA",
		"filename": "mA.cdxml"
	},
	{
		"name": "mC",
		"filename": "mC.cdxml"
	},
	{
		"name": "mG",
		"filename": "mG.cdxml"
	},
	{
		"name": "mT",
		"filename": "mT.cdxml"
	},
	{
		"name": "mU",
		"filename": "mU.cdxml"
	},
	{
		"name": "n-Am",
		"filename": "n-Am.cdxml"
	},
	{
		"name": "n-Bu",
		"filename": "n-Bu.cdxml"
	},
	{
		"name": "n-C3H7",
		"filename": "n-C3H7.cdxml"
	},
	{
		"name": "n-C4H9",
		"filename": "n-C4H9.cdxml"
	},
	{
		"name": "n-C5H11",
		"filename": "n-C5H11.cdxml"
	},
	{
		"name": "n-Pr",
		"filename": "n-Pr.cdxml"
	},
	{
		"name": "nAm",
		"filename": "nAm.cdxml"
	},
	{
		"name": "nBu",
		"filename": "nBu.cdxml"
	},
	{
		"name": "nPr",
		"filename": "nPr.cdxml"
	},
	{
		"name": "neo-Am",
		"filename": "neo-Am.cdxml"
	},
	{
		"name": "neo-C5H11",
		"filename": "neo-C5H11.cdxml"
	},
	{
		"name": "o-C6H4",
		"filename": "o-C6H4.cdxml"
	},
	{
		"name": "o-Phenylene",
		"filename": "o-Phenylene.cdxml"
	},
	{
		"name": "o-Tolyl",
		"filename": "o-Tolyl.cdxml"
	},
	{
		"name": "p-C6H4",
		"filename": "p-C6H4.cdxml"
	},
	{
		"name": "p-Phenylene",
		"filename": "p-Phenylene.cdxml"
	},
	{
		"name": "p-Tolyl",
		"filename": "p-Tolyl.cdxml"
	},
	{
		"name": "pGlu",
		"filename": "pGlu.cdxml"
	},
	{
		"name": "pO",
		"filename": "pO.cdxml"
	},
	{
		"name": "pS",
		"filename": "pS.cdxml"
	},
	{
		"name": "pSer",
		"filename": "pSer.cdxml"
	},
	{
		"name": "pThr",
		"filename": "pThr.cdxml"
	},
	{
		"name": "pTyr",
		"filename": "pTyr.cdxml"
	},
	{
		"name": "rA",
		"filename": "rA.cdxml"
	},
	{
		"name": "rC",
		"filename": "rC.cdxml"
	},
	{
		"name": "rG",
		"filename": "rG.cdxml"
	},
	{
		"name": "rT",
		"filename": "rT.cdxml"
	},
	{
		"name": "rU",
		"filename": "rU.cdxml"
	},
	{
		"name": "rad",
		"filename": "rad.cdxml"
	},
	{
		"name": "s-Am",
		"filename": "s-Am.cdxml"
	},
	{
		"name": "s-Bu",
		"filename": "s-Bu.cdxml"
	},
	{
		"name": "s-Butyl",
		"filename": "s-Butyl.cdxml"
	},
	{
		"name": "s-C4H9",
		"filename": "s-C4H9.cdxml"
	},
	{
		"name": "s-C5H11",
		"filename": "s-C5H11.cdxml"
	},
	{
		"name": "sAm",
		"filename": "sAm.cdxml"
	},
	{
		"name": "sBu",
		"filename": "sBu.cdxml"
	},
	{
		"name": "sDNAA",
		"filename": "sDNAA.cdxml"
	},
	{
		"name": "sDNAC",
		"filename": "sDNAC.cdxml"
	},
	{
		"name": "sDNAG",
		"filename": "sDNAG.cdxml"
	},
	{
		"name": "sDNAT",
		"filename": "sDNAT.cdxml"
	},
	{
		"name": "sOMeRNAA",
		"filename": "sOMeRNAA.cdxml"
	},
	{
		"name": "sOMeRNAC",
		"filename": "sOMeRNAC.cdxml"
	},
	{
		"name": "sOMeRNAG",
		"filename": "sOMeRNAG.cdxml"
	},
	{
		"name": "sOMeRNAT",
		"filename": "sOMeRNAT.cdxml"
	},
	{
		"name": "sOMeRNAU",
		"filename": "sOMeRNAU.cdxml"
	},
	{
		"name": "sRNAA",
		"filename": "sRNAA.cdxml"
	},
	{
		"name": "sRNAC",
		"filename": "sRNAC.cdxml"
	},
	{
		"name": "sRNAG",
		"filename": "sRNAG.cdxml"
	},
	{
		"name": "sRNAT",
		"filename": "sRNAT.cdxml"
	},
	{
		"name": "sRNAU",
		"filename": "sRNAU.cdxml"
	},
	{
		"name": "t-Am",
		"filename": "t-Am.cdxml"
	},
	{
		"name": "t-BOC",
		"filename": "t-BOC.cdxml"
	},
	{
		"name": "t-Bu",
		"filename": "t-Bu.cdxml"
	},
	{
		"name": "t-Butyl",
		"filename": "t-Butyl.cdxml"
	},
	{
		"name": "t-C4H9",
		"filename": "t-C4H9.cdxml"
	},
	{
		"name": "t-C5H11",
		"filename": "t-C5H11.cdxml"
	},
	{
		"name": "tAm",
		"filename": "tAm.cdxml"
	},
	{
		"name": "tBu",
		"filename": "tBu.cdxml"
	},
	{
		"name": "trans-Cinnamyl",
		"filename": "trans-Cinnamyl.cdxml"
	},
	{
		"name": "xAhx",
		"filename": "xAhx.cdxml"
	}
];
const baseUrl = 'https://chemdrawdirect.perkinelmer.cloud/js/chemdrawweb';


json.reverse().forEach(async (item) => {
	const filename = item.filename;

	let url = `${baseUrl}/nicknames/${filename}`;

	try {
		let res = await axios.get(url, {
			responseType: 'arraybuffer',
		})

		// console.error(e.statusCode);

		fse.outputFile(`${filename}`, res.data);
	} catch (e) {
		console.log(`${e.response.status}---${url}`);
	}

})