'use strict';

// Convenience file to store the test input files as variables
var exampleFiles = {};

exampleFiles['si8.xyz'] = `8
Lattice="5.44 0.0 0.0 0.0 5.44 0.0 0.0 0.0 5.44" Properties=species:S:1:pos:R:3:spin:R:1 Time=0.0
Si        0.00000000      0.00000000      0.00000000    1.0
Si        1.36000000      1.36000000      1.36000000    0.0
Si        2.72000000      2.72000000      0.00000000    0.0
Si        4.08000000      4.08000000      1.36000000    0.0
Si        2.72000000      0.00000000      2.72000000    0.0
Si        4.08000000      1.36000000      4.08000000    0.0
Si        0.00000000      2.72000000      2.72000000    0.0
Si        1.36000000      4.08000000      4.08000000    0.0`;

exampleFiles['H2O.xyz'] = `6
Lattice="10.0 0.0 0.0 0.0 10.0 0.0 0.0 0.0 10.0" Properties=species:S:1:pos:R:3 pbc="T T T"
O        0.00000000       0.00000000       0.11926200
H        0.00000000       0.76323900      -0.47704700
H        0.00000000      -0.76323900      -0.47704700
O        5.00000000       0.00000000       0.11926200
H        5.00000000       0.76323900       9.522953
H        5.00000000       9.236761         9.522953`;

exampleFiles['org.cif'] = `#------------------------------------------------------------------------------
#$Date: 2016-02-18 17:37:37 +0200 (Thu, 18 Feb 2016) $
#$Revision: 176729 $
#$URL: svn://www.crystallography.net/cod/cif/1/50/19/1501936.cif $
#------------------------------------------------------------------------------
#
# This file is available in the Crystallography Open Database (COD),
# http://www.crystallography.net/
#
# All data on this site have been placed in the public domain by the
# contributors.
#
data_1501936
loop_
_publ_author_name
'Stewart, Craig'
'McDonald, Robert'
'West, F. G.'
_publ_section_title
;
 Expedient route to the tigliane-daphnane skeleton via oxonium ylide
 [1,2]-shift.
;
_journal_issue                   4
_journal_name_full               'Organic letters'
_journal_page_first              720
_journal_page_last               723
_journal_paper_doi               10.1021/ol102953s
_journal_volume                  13
_journal_year                    2011
_chemical_formula_moiety         'C21 H26 O4'
_chemical_formula_sum            'C21 H26 O4'
_chemical_formula_weight         342.42
_chemical_name_systematic
; 
 ? 
;
_space_group_IT_number           2
_symmetry_cell_setting           triclinic
_symmetry_space_group_name_Hall  '-P 1'
_symmetry_space_group_name_H-M   'P -1'
_atom_sites_solution_hydrogens   geom
_atom_sites_solution_primary     direct
_atom_sites_solution_secondary   difmap
_audit_creation_method           SHELXL-97
_cell_angle_alpha                79.9846(4)
_cell_angle_beta                 82.2194(4)
_cell_angle_gamma                77.7988(4)
_cell_formula_units_Z            2
_cell_length_a                   8.2302(3)
_cell_length_b                   8.2837(3)
_cell_length_c                   13.1837(4)
_cell_measurement_reflns_used    7347
_cell_measurement_temperature    173(2)
_cell_measurement_theta_max      27.48
_cell_measurement_theta_min      2.54
_cell_volume                     860.57(5)
_computing_cell_refinement       'Bruker SAINT'
_computing_data_collection       'Bruker APEX2'
_computing_data_reduction        'Bruker SAINT'
_computing_molecular_graphics    'Bruker SHELXTL'
_computing_publication_material  'Bruker SHELXTL'
_computing_structure_refinement  'SHELXL-97 (Sheldrick, 2008)'
_computing_structure_solution    'SHELXD (Schneider & Sheldrick, 2002)'
_diffrn_ambient_temperature      173(2)
_diffrn_measured_fraction_theta_full 0.986
_diffrn_measured_fraction_theta_max 0.986
_diffrn_measurement_device_type  'Bruker APEX-II CCD'
_diffrn_measurement_method       '\f and \w scans'
_diffrn_radiation_monochromator  graphite
_diffrn_radiation_source         'fine-focus sealed tube'
_diffrn_radiation_type           MoK\a
_diffrn_radiation_wavelength     0.71073
_diffrn_reflns_av_R_equivalents  0.0099
_diffrn_reflns_av_sigmaI/netI    0.0146
_diffrn_reflns_limit_h_max       10
_diffrn_reflns_limit_h_min       -10
_diffrn_reflns_limit_k_max       10
_diffrn_reflns_limit_k_min       -10
_diffrn_reflns_limit_l_max       17
_diffrn_reflns_limit_l_min       -17
_diffrn_reflns_number            7543
_diffrn_reflns_theta_full        27.48
_diffrn_reflns_theta_max         27.48
_diffrn_reflns_theta_min         1.58
_exptl_absorpt_coefficient_mu    0.090
_exptl_absorpt_correction_T_max  0.9723
_exptl_absorpt_correction_T_min  0.9471
_exptl_absorpt_correction_type   integration
_exptl_absorpt_process_details   'SADABS (Sheldrick, 2008)'
_exptl_crystal_colour            colourless
_exptl_crystal_density_diffrn    1.321
_exptl_crystal_density_method    'not measured'
_exptl_crystal_description       prism
_exptl_crystal_F_000             368
_exptl_crystal_size_max          0.61
_exptl_crystal_size_mid          0.35
_exptl_crystal_size_min          0.31
_refine_diff_density_max         0.347
_refine_diff_density_min         -0.262
_refine_diff_density_rms         0.054
_refine_ls_extinction_method     none
_refine_ls_goodness_of_fit_ref   1.029
_refine_ls_hydrogen_treatment    constr
_refine_ls_matrix_type           full
_refine_ls_number_parameters     227
_refine_ls_number_reflns         3894
_refine_ls_number_restraints     0
_refine_ls_restrained_S_all      1.029
_refine_ls_R_factor_all          0.0447
_refine_ls_R_factor_gt           0.0418
_refine_ls_shift/su_max          0.000
_refine_ls_shift/su_mean         0.000
_refine_ls_structure_factor_coef Fsqd
_refine_ls_weighting_details
'calc w=1/[\s^2^(Fo^2^)+(0.0666P)^2^+0.2631P] where P=(Fo^2^+2Fc^2^)/3'
_refine_ls_weighting_scheme      calc
_refine_ls_wR_factor_gt          0.1105
_refine_ls_wR_factor_ref         0.1138
_reflns_number_gt                3564
_reflns_number_total             3894
_reflns_threshold_expression     I>2\s(I)
_cod_data_source_file            ol102953s_si_002.cif
_cod_data_source_block           16
_cod_depositor_comments
;
The following automatic conversions were performed:

'_symmetry_cell_setting' value 'Triclinic' changed to 'triclinic'
according to /home/saulius/struct/CIF-dictionaries/cif_core.dic
dictionary named 'cif_core.dic' version 2.4.1 from 2010-06-29.

Automatic conversion script
Id: cif_fix_values 1715 2011-07-08 13:25:40Z adriana 
;
_cod_database_code               1501936
loop_
_symmetry_equiv_pos_as_xyz
'x, y, z'
'-x, -y, -z'
loop_
_atom_site_label
_atom_site_type_symbol
_atom_site_fract_x
_atom_site_fract_y
_atom_site_fract_z
_atom_site_U_iso_or_equiv
_atom_site_adp_type
_atom_site_occupancy
_atom_site_symmetry_multiplicity
_atom_site_calc_flag
_atom_site_refinement_flags
O1 O 0.43325(9) 0.00289(10) 0.22205(6) 0.02475(18) Uani 1 1 d .
O2 O 0.25690(11) 0.06668(12) 0.48190(6) 0.0318(2) Uani 1 1 d .
H2O H 0.1572 0.0969 0.4682 0.048 Uiso 1 1 calc R
O3 O 0.03180(9) 0.07400(10) 0.35068(6) 0.02243(18) Uani 1 1 d .
O4 O -0.05742(9) 0.12277(10) 0.18848(6) 0.02204(18) Uani 1 1 d .
C1 C 0.23130(16) 0.31699(15) 0.05350(9) 0.0292(3) Uani 1 1 d .
H1A H 0.1668 0.2801 0.0066 0.035 Uiso 1 1 calc R
H1B H 0.1966 0.4394 0.0512 0.035 Uiso 1 1 calc R
C2 C 0.41826(17) 0.26953(18) 0.02240(10) 0.0362(3) Uani 1 1 d .
H2A H 0.4570 0.3551 -0.0324 0.043 Uiso 1 1 calc R
H2B H 0.4466 0.1600 -0.0026 0.043 Uiso 1 1 calc R
C3 C 0.49496(16) 0.26142(18) 0.12251(10) 0.0346(3) Uani 1 1 d .
H3A H 0.5020 0.3746 0.1340 0.041 Uiso 1 1 calc R
H3B H 0.6086 0.1915 0.1204 0.041 Uiso 1 1 calc R
C4 C 0.37765(13) 0.18364(14) 0.20769(9) 0.0236(2) Uani 1 1 d .
C5 C 0.37169(15) 0.22671(15) 0.31723(9) 0.0278(2) Uani 1 1 d .
H5A H 0.2716 0.3123 0.3326 0.033 Uiso 1 1 calc R
H5B H 0.4728 0.2685 0.3250 0.033 Uiso 1 1 calc R
C6 C 0.36401(14) 0.05939(14) 0.38863(9) 0.0249(2) Uani 1 1 d .
H6 H 0.4795 0.0130 0.4087 0.030 Uiso 1 1 calc R
C7 C 0.33164(13) -0.05107(13) 0.31315(8) 0.0221(2) Uani 1 1 d .
H7 H 0.3766 -0.1709 0.3390 0.026 Uiso 1 1 calc R
C8 C 0.14955(13) -0.03284(13) 0.28705(8) 0.0200(2) Uani 1 1 d .
C9 C 0.09823(15) -0.20349(14) 0.30165(9) 0.0274(2) Uani 1 1 d .
H9A H 0.1342 -0.2692 0.3677 0.033 Uiso 1 1 calc R
H9B H -0.0251 -0.1870 0.3061 0.033 Uiso 1 1 calc R
C10 C 0.17450(18) -0.30157(15) 0.21329(10) 0.0335(3) Uani 1 1 d .
H10A H 0.2980 -0.3217 0.2093 0.040 Uiso 1 1 calc R
H10B H 0.1393 -0.4111 0.2257 0.040 Uiso 1 1 calc R
C11 C 0.11557(18) -0.20110(15) 0.11223(10) 0.0320(3) Uani 1 1 d .
H11A H -0.0079 -0.1821 0.1166 0.038 Uiso 1 1 calc R
H11B H 0.1615 -0.2652 0.0546 0.038 Uiso 1 1 calc R
C12 C 0.17208(14) -0.03337(14) 0.09030(8) 0.0243(2) Uani 1 1 d .
H12A H 0.2952 -0.0536 0.0750 0.029 Uiso 1 1 calc R
H12B H 0.1235 0.0326 0.0277 0.029 Uiso 1 1 calc R
C13 C 0.12298(12) 0.06918(12) 0.17872(8) 0.0190(2) Uani 1 1 d .
C14 C 0.20338(13) 0.22587(13) 0.16509(8) 0.0210(2) Uani 1 1 d .
H14 H 0.1286 0.3076 0.2067 0.025 Uiso 1 1 calc R
C15 C -0.11096(13) 0.13931(14) 0.29369(8) 0.0222(2) Uani 1 1 d .
H15 H -0.1989 0.0710 0.3197 0.027 Uiso 1 1 calc R
C16 C -0.17827(13) 0.31719(14) 0.31250(9) 0.0246(2) Uani 1 1 d .
C17 C -0.21011(15) 0.44865(15) 0.23268(10) 0.0285(2) Uani 1 1 d .
H17 H -0.1901 0.4287 0.1628 0.034 Uiso 1 1 calc R
C18 C -0.27164(16) 0.61039(16) 0.25492(11) 0.0356(3) Uani 1 1 d .
H18 H -0.2950 0.7001 0.2001 0.043 Uiso 1 1 calc R
C19 C -0.29871(16) 0.64062(17) 0.35582(12) 0.0402(3) Uani 1 1 d .
H19 H -0.3359 0.7515 0.3706 0.048 Uiso 1 1 calc R
C20 C -0.2715(2) 0.5084(2) 0.43574(13) 0.0532(4) Uani 1 1 d .
H20 H -0.2928 0.5283 0.5056 0.064 Uiso 1 1 calc R
C21 C -0.2133(2) 0.34710(19) 0.41411(11) 0.0450(4) Uani 1 1 d .
H21 H -0.1973 0.2566 0.4692 0.054 Uiso 1 1 calc R
loop_
_atom_site_aniso_label
_atom_site_aniso_U_11
_atom_site_aniso_U_22
_atom_site_aniso_U_33
_atom_site_aniso_U_23
_atom_site_aniso_U_13
_atom_site_aniso_U_12
O1 0.0204(4) 0.0269(4) 0.0259(4) -0.0057(3) -0.0017(3) -0.0012(3)
O2 0.0315(4) 0.0438(5) 0.0215(4) -0.0075(4) -0.0049(3) -0.0067(4)
O3 0.0201(4) 0.0270(4) 0.0189(4) -0.0043(3) -0.0034(3) 0.0000(3)
O4 0.0195(4) 0.0265(4) 0.0204(4) -0.0038(3) -0.0048(3) -0.0031(3)
C1 0.0362(6) 0.0255(5) 0.0262(6) 0.0017(4) -0.0051(5) -0.0101(5)
C2 0.0391(7) 0.0386(7) 0.0290(6) 0.0001(5) 0.0050(5) -0.0127(5)
C3 0.0282(6) 0.0416(7) 0.0349(6) -0.0006(5) 0.0006(5) -0.0155(5)
C4 0.0217(5) 0.0248(5) 0.0253(5) -0.0034(4) -0.0030(4) -0.0068(4)
C5 0.0307(6) 0.0285(6) 0.0277(6) -0.0061(4) -0.0078(4) -0.0092(4)
C6 0.0234(5) 0.0292(6) 0.0230(5) -0.0055(4) -0.0074(4) -0.0028(4)
C7 0.0214(5) 0.0223(5) 0.0218(5) -0.0028(4) -0.0056(4) -0.0008(4)
C8 0.0213(5) 0.0196(5) 0.0191(5) -0.0029(4) -0.0035(4) -0.0031(4)
C9 0.0341(6) 0.0219(5) 0.0272(6) 0.0021(4) -0.0083(5) -0.0093(4)
C10 0.0480(7) 0.0194(5) 0.0349(6) -0.0034(5) -0.0132(5) -0.0058(5)
C11 0.0472(7) 0.0235(6) 0.0294(6) -0.0073(4) -0.0117(5) -0.0083(5)
C12 0.0299(5) 0.0235(5) 0.0205(5) -0.0059(4) -0.0041(4) -0.0040(4)
C13 0.0188(5) 0.0189(5) 0.0196(5) -0.0026(4) -0.0039(4) -0.0027(4)
C14 0.0219(5) 0.0200(5) 0.0217(5) -0.0024(4) -0.0034(4) -0.0051(4)
C15 0.0188(5) 0.0261(5) 0.0212(5) -0.0015(4) -0.0033(4) -0.0038(4)
C16 0.0187(5) 0.0278(5) 0.0268(5) -0.0059(4) -0.0028(4) -0.0020(4)
C17 0.0250(5) 0.0286(6) 0.0312(6) -0.0035(5) -0.0044(4) -0.0032(4)
C18 0.0289(6) 0.0276(6) 0.0484(8) -0.0032(5) -0.0076(5) -0.0008(5)
C19 0.0284(6) 0.0338(7) 0.0599(9) -0.0201(6) -0.0106(6) 0.0049(5)
C20 0.0639(10) 0.0522(9) 0.0397(8) -0.0233(7) -0.0113(7) 0.0147(8)
C21 0.0585(9) 0.0408(8) 0.0282(7) -0.0085(6) -0.0068(6) 0.0113(6)
loop_
_atom_type_symbol
_atom_type_description
_atom_type_scat_dispersion_real
_atom_type_scat_dispersion_imag
_atom_type_scat_source
C C 0.0033 0.0016 'International Tables Vol C Tables 4.2.6.8 and 6.1.1.4'
H H 0.0000 0.0000 'International Tables Vol C Tables 4.2.6.8 and 6.1.1.4'
O O 0.0106 0.0060 'International Tables Vol C Tables 4.2.6.8 and 6.1.1.4'
loop_
_geom_angle_atom_site_label_1
_geom_angle_atom_site_label_2
_geom_angle_atom_site_label_3
_geom_angle
C7 O1 C4 102.79(8)
C15 O3 C8 106.30(7)
C15 O4 C13 107.90(7)
C2 C1 C14 105.14(9)
C1 C2 C3 103.37(10)
C2 C3 C4 105.12(10)
O1 C4 C3 108.63(9)
O1 C4 C5 103.13(9)
C3 C4 C5 117.53(10)
O1 C4 C14 108.27(8)
C3 C4 C14 105.59(9)
C5 C4 C14 113.35(9)
C4 C5 C6 103.88(9)
O2 C6 C5 116.61(10)
O2 C6 C7 117.45(10)
C5 C6 C7 102.19(9)
O1 C7 C6 100.99(9)
O1 C7 C8 109.50(8)
C6 C7 C8 118.01(9)
O3 C8 C9 108.90(9)
O3 C8 C13 99.92(8)
C9 C8 C13 113.17(9)
O3 C8 C7 111.63(8)
C9 C8 C7 111.12(9)
C13 C8 C7 111.61(8)
C10 C9 C8 112.28(10)
C11 C10 C9 108.77(10)
C10 C11 C12 110.83(10)
C13 C12 C11 114.11(9)
O4 C13 C12 108.21(8)
O4 C13 C8 100.85(8)
C12 C13 C8 114.25(8)
O4 C13 C14 108.43(8)
C12 C13 C14 114.66(9)
C8 C13 C14 109.39(8)
C1 C14 C13 116.60(9)
C1 C14 C4 105.76(9)
C13 C14 C4 111.64(8)
O4 C15 O3 107.05(8)
O4 C15 C16 114.21(9)
O3 C15 C16 108.24(8)
C17 C16 C21 119.43(11)
C17 C16 C15 122.58(10)
C21 C16 C15 117.97(11)
C16 C17 C18 119.94(12)
C19 C18 C17 120.39(12)
C18 C19 C20 119.60(13)
C19 C20 C21 120.19(14)
C16 C21 C20 120.35(13)
loop_
_geom_bond_atom_site_label_1
_geom_bond_atom_site_label_2
_geom_bond_distance
O1 C7 1.4286(13)
O1 C4 1.4568(13)
O2 C6 1.4152(14)
O3 C15 1.4376(12)
O3 C8 1.4498(12)
O4 C15 1.4184(13)
O4 C13 1.4518(12)
C1 C2 1.5232(18)
C1 C14 1.5436(15)
C2 C3 1.5236(19)
C3 C4 1.5252(16)
C4 C5 1.5387(15)
C4 C14 1.5597(14)
C5 C6 1.5422(16)
C6 C7 1.5459(15)
C7 C8 1.5534(14)
C8 C9 1.5328(15)
C8 C13 1.5454(14)
C9 C10 1.5254(17)
C10 C11 1.5237(17)
C11 C12 1.5256(16)
C12 C13 1.5217(14)
C13 C14 1.5507(14)
C15 C16 1.5115(15)
C16 C17 1.3847(16)
C16 C21 1.3854(17)
C17 C18 1.3954(17)
C18 C19 1.376(2)
C19 C20 1.385(2)
C20 C21 1.386(2)
loop_
_geom_hbond_atom_site_label_D
_geom_hbond_atom_site_label_H
_geom_hbond_atom_site_label_A
_geom_hbond_distance_DH
_geom_hbond_distance_HA
_geom_hbond_distance_DA
_geom_hbond_angle_DHA
O2 H2O O3 0.84 2.03 2.6856(11) 134.4
loop_
_geom_torsion_atom_site_label_1
_geom_torsion_atom_site_label_2
_geom_torsion_atom_site_label_3
_geom_torsion_atom_site_label_4
_geom_torsion
C14 C1 C2 C3 -36.03(12)
C1 C2 C3 C4 38.59(13)
C7 O1 C4 C3 171.08(9)
C7 O1 C4 C5 45.66(10)
C7 O1 C4 C14 -74.71(10)
C2 C3 C4 O1 90.00(11)
C2 C3 C4 C5 -153.50(11)
C2 C3 C4 C14 -25.95(13)
O1 C4 C5 C6 -19.76(11)
C3 C4 C5 C6 -139.21(10)
C14 C4 C5 C6 97.07(10)
C4 C5 C6 O2 -140.12(9)
C4 C5 C6 C7 -10.64(11)
C4 O1 C7 C6 -52.55(9)
C4 O1 C7 C8 72.65(10)
O2 C6 C7 O1 167.08(9)
C5 C6 C7 O1 38.13(10)
O2 C6 C7 C8 47.83(13)
C5 C6 C7 C8 -81.11(11)
C15 O3 C8 C9 -81.23(10)
C15 O3 C8 C13 37.59(9)
C15 O3 C8 C7 155.72(8)
O1 C7 C8 O3 -122.30(9)
C6 C7 C8 O3 -7.63(13)
O1 C7 C8 C9 115.92(10)
C6 C7 C8 C9 -129.40(10)
O1 C7 C8 C13 -11.42(12)
C6 C7 C8 C13 103.25(11)
O3 C8 C9 C10 160.32(9)
C13 C8 C9 C10 50.17(12)
C7 C8 C9 C10 -76.32(11)
C8 C9 C10 C11 -59.99(13)
C9 C10 C11 C12 60.93(14)
C10 C11 C12 C13 -53.49(14)
C15 O4 C13 C12 150.64(9)
C15 O4 C13 C8 30.42(9)
C15 O4 C13 C14 -84.43(9)
C11 C12 C13 O4 -68.27(11)
C11 C12 C13 C8 43.17(13)
C11 C12 C13 C14 170.58(9)
O3 C8 C13 O4 -40.93(9)
C9 C8 C13 O4 74.70(10)
C7 C8 C13 O4 -159.07(8)
O3 C8 C13 C12 -156.73(8)
C9 C8 C13 C12 -41.11(12)
C7 C8 C13 C12 85.12(11)
O3 C8 C13 C14 73.20(9)
C9 C8 C13 C14 -171.18(9)
C7 C8 C13 C14 -44.95(11)
C2 C1 C14 C13 -104.72(11)
C2 C1 C14 C4 20.01(12)
O4 C13 C14 C1 -86.70(11)
C12 C13 C14 C1 34.33(13)
C8 C13 C14 C1 164.18(9)
O4 C13 C14 C4 151.61(8)
C12 C13 C14 C4 -87.37(11)
C8 C13 C14 C4 42.48(11)
O1 C4 C14 C1 -112.58(9)
C3 C4 C14 C1 3.62(12)
C5 C4 C14 C1 133.64(10)
O1 C4 C14 C13 15.19(11)
C3 C4 C14 C13 131.38(10)
C5 C4 C14 C13 -98.59(10)
C13 O4 C15 O3 -7.90(10)
C13 O4 C15 C16 111.90(9)
C8 O3 C15 O4 -20.10(10)
C8 O3 C15 C16 -143.65(9)
O4 C15 C16 C17 9.96(15)
O3 C15 C16 C17 129.09(11)
O4 C15 C16 C21 -171.89(11)
O3 C15 C16 C21 -52.76(14)
C21 C16 C17 C18 2.13(19)
C15 C16 C17 C18 -179.75(10)
C16 C17 C18 C19 0.94(19)
C17 C18 C19 C20 -2.8(2)
C18 C19 C20 C21 1.6(3)
C17 C16 C21 C20 -3.3(2)
C15 C16 C21 C20 178.47(14)
C19 C20 C21 C16 1.5(3)
`

exampleFiles['example_single.cif'] = `#########################################################################
#                                   #
#           THIS IS AN EXAMPLE OF A CIF REPORTING A SINGLE      #
#       STRUCTURE AND INCLUDING USER-DEFINABLE TEXT         #
#       SECTIONS                            #
#                                   #
#########################################################################

data_global

loop_
_publ_body_element
_publ_body_title
_publ_body_contents

 section . 
;
?
;
 section 
;
Introduction
; 
;\
INTRODUCTION TEXT HERE
;
 section Experimental 
;
?
;
 subsection 'Synthesis and crystallization'
;
TEXT HERE
;

 subsection Refinement
;
TEXT HERE
;

 section 'Results and discussion'
;
TEXT HERE
;

#=============================================================

_audit_creation_date        'June 17, 2013'
_audit_creation_method      'from SHELXL-97'
_audit_update_record
;
;

#===================================================================
# 1. SUBMISSION DETAILS

_publ_contact_author_name       'NAME'
_publ_contact_author_address
;
ADDRESS
;

_publ_contact_author_phone      ?
_publ_contact_author_fax        ?
_publ_contact_author_email      ?

_publ_requested_journal         'Acta Crystallographica C'
_publ_requested_category        FA
_publ_requested_coeditor_name   ?

_publ_contact_letter
;
;

#=====================================================================
# 2. PROCESSING SUMMARY  (IUCr Office Use Only)

_journal_date_recd_electronic     ?
_journal_date_to_coeditor         ?
_journal_date_from_coeditor       ?
_journal_date_accepted            ?
_journal_date_printers_first      ?
_journal_date_printers_final      ?
_journal_date_proofs_out          ?
_journal_date_proofs_in           ?
_journal_coeditor_name            ?
_journal_coeditor_code            ?
_journal_paper_doi                ?
_journal_paper_category           FA
_journal_coeditor_notes           ?
_journal_techeditor_code          ?
_iucr_compatibility_tag           ACTA95
_journal_techeditor_notes         ?
_journal_coden_ASTM               ACSCGG
_journal_name_full                'Acta Crystallographica, Section C'
_journal_year                     ?
_journal_volume                   ?
_journal_issue                    ?
_journal_page_first               ?
_journal_page_last                ?
_journal_suppl_publ_number        ?
_journal_suppl_publ_pages         ?

#=====================================================================
# 3. TITLE AND AUTHOR LIST

_publ_section_title
;
TITLE
;

loop_
_publ_author_name
_publ_author_address
_publ_author_email
_publ_author_footnote
'NAME'
;  
ADDRESS
;
? ?

#======================================================================
# 4. TEXT

_publ_section_synopsis
;
TEXT HERE
;

_publ_section_keywords
;
TEXT HERE
;

_publ_section_abstract
;
TEXT HERE
;

_publ_section_references
;
REFERENCES HERE
;

_publ_section_figure_captions  
;
FIGURE CAPTIONS HERE
;

_publ_section_table_legends
;
TABLE CAPTIONS HERE
;

_publ_section_acknowledgements
;
ACKNOWLEDGEMENTS HERE
;

#=====================================================================

data_I

#=====================================================================
# 5. Chemical Data

_chemical_name_systematic
;\
(6<i>R</i>*,11<i>R</i>*)-5-Acetyl-11-ethyl-6,11-dihydro-5<i>H</i>-\
dibenzo[<i>b</i>,<i>e</i>]azepine-6-carboxylic acid
;
_chemical_name_common             ?
_chemical_melting_point           ?
_chemical_formula_moiety          'C19 H19 N O3' 
_chemical_formula_sum             'C19 H19 N O3' 
_chemical_formula_weight          309.35 
_chemical_compound_source         'synthesised by authors, see text'
_chemical_formula_iupac           'C19 H19 N O3' 

loop_
 _atom_type_symbol
 _atom_type_description
 _atom_type_scat_dispersion_real
 _atom_type_scat_dispersion_imag
 _atom_type_scat_source
 'C'  'C'   0.0033   0.0016
 'International Tables Vol C Tables 4.2.6.8 and 6.1.1.4'
 'H'  'H'   0.0000   0.0000
 'International Tables Vol C Tables 4.2.6.8 and 6.1.1.4' 
 'N'  'N'   0.0061   0.0033
 'International Tables Vol C Tables 4.2.6.8 and 6.1.1.4'
 'O'  'O'   0.0106   0.0060
 'International Tables Vol C Tables 4.2.6.8 and 6.1.1.4'


_symmetry_cell_setting            monoclinic
_symmetry_space_group_name_H-M    'P 21'
_symmetry_space_group_name_Hall   'P 2yb'

loop_
 _symmetry_equiv_pos_as_xyz
'x, y, z' 
 '-x, y+1/2, -z' 

_cell_length_a                    8.8053(3) 
_cell_length_b                    10.9821(4) 
_cell_length_c                    9.0080(6) 
_cell_angle_alpha                 90.00 
_cell_angle_beta                  118.510(3) 
_cell_angle_gamma                 90.00 
_cell_volume                      765.45(6) 
_cell_formula_units_Z             2 
_cell_measurement_temperature     120(2)
_cell_measurement_reflns_used     1853
_cell_measurement_theta_min       3.20
_cell_measurement_theta_max       27.50

_exptl_crystal_description        rod
_exptl_crystal_colour             colourless
_exptl_crystal_size_max           0.26
_exptl_crystal_size_mid           0.14
_exptl_crystal_size_min           0.10
_exptl_crystal_density_meas       ?
_exptl_crystal_density_diffrn     1.342
_exptl_crystal_density_method     'not measured'
_exptl_crystal_F_000              328
_exptl_absorpt_coefficient_mu     0.091
_exptl_absorpt_correction_type    multi-scan
_exptl_absorpt_process_details    '(SADABS; Sheldrick, 2003)'
_exptl_absorpt_correction_T_min   0.977
_exptl_absorpt_correction_T_max   0.991

_exptl_special_details
?

_diffrn_ambient_temperature       120(2)
_diffrn_radiation_wavelength      0.71073
_diffrn_radiation_type            'Mo K\a'
_diffrn_radiation_source          'Bruker Nonius FR591 rotating anode'
_diffrn_radiation_monochromator   graphite
_diffrn_measurement_device_type   'Bruker Nonius KappaCCD area-detector'
_diffrn_measurement_method        '\f and \w'
_diffrn_detector_area_resol_mean  9.091
_diffrn_standards_interval_count  0
_diffrn_standards_interval_time   0
_diffrn_standards_number          0
_diffrn_standards_decay_%         0

_diffrn_reflns_number             13276 
_diffrn_reflns_av_R_equivalents   0.0486 
_diffrn_reflns_av_sigmaI/netI     0.0321 
_diffrn_reflns_limit_h_min       -11 
_diffrn_reflns_limit_h_max        11 
_diffrn_reflns_limit_k_min       -14 
_diffrn_reflns_limit_k_max        14 
_diffrn_reflns_limit_l_min       -11 
_diffrn_reflns_limit_l_max        11 
_diffrn_reflns_theta_min          3.71
_diffrn_reflns_theta_max          27.50
_diffrn_reflns_theta_full              27.50
_diffrn_measured_fraction_theta_max    0.997
_diffrn_measured_fraction_theta_full   0.997
_reflns_number_total              1851
_reflns_number_gt                 1638
_reflns_threshold_expression      I>2\s(I)

_computing_data_collection        'COLLECT (Nonius, 1998)' 
_computing_cell_refinement        
'DIRAX/LSQ (Duisenberg <i>et al.</i>, 2000)'
_computing_data_reduction         
'EVALCCD (Duisenberg <i>et al.</i>, 2003)'
_computing_structure_solution     'SIR2004 (Burla et al., 2005)'
_computing_structure_refinement   'SHELXL97 (Sheldrick, 2008)'  
_computing_molecular_graphics     'PLATON (Spek, 2009)'
_computing_publication_material 
'SHELXL97 (Sheldrick, 2008) and PLATON (Spek, 2009)'

#=========================================================================
# 8. Refinement Data

_refine_ls_structure_factor_coef  Fsqd
_refine_ls_matrix_type            full
_refine_ls_weighting_scheme       calc
_refine_ls_weighting_details
'w = 1/[\s^2^(Fo^2^)+(0.0351P)^2^+0.1657P] where P=(Fo^2^+2Fc^2^)/3' 
_atom_sites_solution_primary      direct
_atom_sites_solution_secondary    difmap
_atom_sites_solution_hydrogens    geom
_refine_ls_hydrogen_treatment     constr
_refine_ls_extinction_method      none
_refine_ls_extinction_coef        ?
_chemical_absolute_configuration  unk
_refine_ls_number_reflns          1851 
_refine_ls_number_parameters      210 
_refine_ls_number_restraints      1 
_refine_ls_R_factor_all           0.0455 
_refine_ls_R_factor_gt            0.0360 
_refine_ls_wR_factor_ref          0.0807 
_refine_ls_wR_factor_gt           0.0772 
_refine_ls_goodness_of_fit_ref    1.146 
_refine_ls_restrained_S_all       1.146 
_refine_ls_shift/su_max           0.001
_refine_ls_shift/su_mean          0.000
_refine_diff_density_max          0.209
_refine_diff_density_min         -0.240

#=========================================================================
# 9. Atomic Coordinates and Displacement Parameters

loop_
 _atom_site_label
 _atom_site_type_symbol
 _atom_site_fract_x
 _atom_site_fract_y
 _atom_site_fract_z
 _atom_site_U_iso_or_equiv
 _atom_site_adp_type
 _atom_site_occupancy
 _atom_site_symmetry_multiplicity
 _atom_site_calc_flag
 _atom_site_refinement_flags
 _atom_site_disorder_assembly
 _atom_site_disorder_group
C1 C 0.6424(3) 0.5942(2) 0.7939(3) 0.0186(5) Uani 1 1 d . . . 
H1 H 0.6599 0.6154 0.9031 0.022 Uiso 1 1 calc R . . 
C2 C 0.7828(3) 0.5595(2) 0.7731(3) 0.0211(5) Uani 1 1 d . . . 
H2 H 0.8953 0.5589 0.8678 0.025 Uiso 1 1 calc R . . 
C3 C 0.7604(3) 0.5255(2) 0.6149(3) 0.0202(5) Uani 1 1 d . . . 
H3 H 0.8563 0.4993 0.6019 0.024 Uiso 1 1 calc R . . 
C4 C 0.5955(3) 0.5306(2) 0.4757(3) 0.0166(5) Uani 1 1 d . . . 
H4 H 0.5780 0.5079 0.3669 0.020 Uiso 1 1 calc R . . 
C4a C 0.4576(3) 0.5687(2) 0.4973(3) 0.0142(5) Uani 1 1 d . . . 
N5 N 0.2883(2) 0.58197(17) 0.3533(2) 0.0132(4) Uani 1 1 d . . . 
C6 C 0.1469(3) 0.4966(2) 0.3244(3) 0.0128(4) Uani 1 1 d . . . 
H6 H 0.0389 0.5461 0.2831 0.015 Uiso 1 1 calc R . . 
C6a C 0.1714(3) 0.4295(2) 0.4842(3) 0.0145(5) Uani 1 1 d . . . 
C7 C 0.1243(3) 0.3077(2) 0.4737(3) 0.0174(5) Uani 1 1 d . . . 
H7 H 0.0884 0.2652 0.3704 0.021 Uiso 1 1 calc R . . 
C8 C 0.1286(3) 0.2465(2) 0.6107(3) 0.0189(5) Uani 1 1 d . . . 
H8 H 0.0977 0.1628 0.6008 0.023 Uiso 1 1 calc R . . 
C9 C 0.1780(3) 0.3073(2) 0.7616(3) 0.0188(5) Uani 1 1 d . . . 
H9 H 0.1759 0.2670 0.8540 0.023 Uiso 1 1 calc R . . 
C10 C 0.2305(3) 0.4277(2) 0.7762(3) 0.0185(5) Uani 1 1 d . . . 
H10 H 0.2674 0.4685 0.8808 0.022 Uiso 1 1 calc R . . 
C10a C 0.2307(3) 0.4909(2) 0.6412(3) 0.0151(5) Uani 1 1 d . . . 
C11 C 0.3097(3) 0.6185(2) 0.6677(3) 0.0150(5) Uani 1 1 d . . . 
H11 H 0.2307 0.6694 0.5686 0.018 Uiso 1 1 calc R . . 
C11a C 0.4763(3) 0.5982(2) 0.6566(3) 0.0145(5) Uani 1 1 d . . . 
C51 C 0.2534(3) 0.6720(2) 0.2388(3) 0.0142(5) Uani 1 1 d . . . 
O51 O 0.10670(19) 0.68043(16) 0.11339(19) 0.0180(4) Uani 1 1 d . . . 
C52 C 0.3950(3) 0.7609(2) 0.2675(3) 0.0189(5) Uani 1 1 d . . . 
H52A H 0.4784 0.7219 0.2397 0.028 Uiso 1 1 calc R . . 
H52B H 0.4537 0.7862 0.3862 0.028 Uiso 1 1 calc R . . 
H52C H 0.3452 0.8324 0.1952 0.028 Uiso 1 1 calc R . . 
C61 C 0.1208(3) 0.4093(2) 0.1806(3) 0.0145(5) Uani 1 1 d . . . 
O61 O -0.0387(2) 0.36474(17) 0.10291(19) 0.0186(4) Uani 1 1 d . . . 
H61 H -0.0487 0.3107 0.0297 0.028 Uiso 1 1 d R . . 
O62 O 0.2327(2) 0.38608(17) 0.1438(2) 0.0224(4) Uani 1 1 d . . . 
C111 C 0.3325(3) 0.6837(2) 0.8280(3) 0.0202(5) Uani 1 1 d . . . 
H11A H 0.2247 0.6761 0.8362 0.024 Uiso 1 1 calc R . . 
H11B H 0.4266 0.6440 0.9284 0.024 Uiso 1 1 calc R . . 
C112 C 0.3752(3) 0.8181(2) 0.8272(3) 0.0229(5) Uani 1 1 d . . . 
H12A H 0.4821 0.8260 0.8195 0.034 Uiso 1 1 calc R . . 
H12B H 0.3905 0.8565 0.9317 0.034 Uiso 1 1 calc R . . 
H12C H 0.2804 0.8583 0.7300 0.034 Uiso 1 1 calc R . . 

loop_
 _atom_site_aniso_label
 _atom_site_aniso_U_11
 _atom_site_aniso_U_22
 _atom_site_aniso_U_33
 _atom_site_aniso_U_23
 _atom_site_aniso_U_13
 _atom_site_aniso_U_12
C1 0.0214(12) 0.0168(12) 0.0133(11) -0.0003(10) 0.0048(10) -0.0021(10) 
C2 0.0163(12) 0.0170(13) 0.0222(13) 0.0035(10) 0.0027(10) -0.0025(9) 
C3 0.0158(11) 0.0198(13) 0.0252(13) 0.0052(10) 0.0101(11) 0.0018(10) 
C4 0.0191(11) 0.0145(12) 0.0168(11) 0.0012(9) 0.0091(10) -0.0002(9) 
C4a 0.0138(11) 0.0128(12) 0.0136(11) 0.0021(9) 0.0045(10) -0.0010(8) 
N5 0.0120(9) 0.0137(10) 0.0117(9) 0.0010(8) 0.0038(8) -0.0010(7) 
C6 0.0117(10) 0.0148(11) 0.0113(10) -0.0002(9) 0.0049(9) -0.0006(8) 
C6a 0.0133(11) 0.0176(12) 0.0136(11) 0.0004(9) 0.0071(9) 0.0010(9) 
C7 0.0156(11) 0.0201(12) 0.0151(11) -0.0019(9) 0.0061(9) -0.0004(9) 
C8 0.0177(12) 0.0162(12) 0.0217(12) 0.0009(10) 0.0085(10) -0.0028(10) 
C9 0.0173(12) 0.0222(13) 0.0183(12) 0.0054(10) 0.0097(10) 0.0008(10) 
C10 0.0172(12) 0.0242(13) 0.0135(11) -0.0006(10) 0.0069(10) 0.0020(10) 
C10a 0.0125(10) 0.0167(11) 0.0162(11) 0.0002(9) 0.0068(9) 0.0006(9) 
C11 0.0152(11) 0.0167(12) 0.0135(11) -0.0015(9) 0.0073(9) -0.0009(9) 
C11a 0.0184(12) 0.0098(10) 0.0156(11) 0.0006(9) 0.0083(10) -0.0010(9) 
C51 0.0168(11) 0.0142(11) 0.0121(11) -0.0020(9) 0.0074(9) 0.0004(9) 
O51 0.0161(8) 0.0186(9) 0.0150(8) 0.0025(7) 0.0040(7) 0.0005(7) 
C52 0.0207(12) 0.0162(12) 0.0194(12) 0.0029(10) 0.0092(10) -0.0010(10) 
C61 0.0176(11) 0.0127(11) 0.0117(10) 0.0022(9) 0.0058(9) 0.0001(9) 
O61 0.0176(8) 0.0213(9) 0.0150(8) -0.0065(7) 0.0062(7) -0.0045(7) 
O62 0.0221(9) 0.0252(10) 0.0241(9) -0.0062(8) 0.0144(8) -0.0024(7) 
C111 0.0243(12) 0.0195(13) 0.0176(12) -0.0036(11) 0.0106(10) -0.0018(11) 
C112 0.0265(13) 0.0208(13) 0.0248(13) -0.0065(10) 0.0151(11) -0.0031(10) 

#=========================================================================
# 10. Molecular Geometry

loop_
 _geom_bond_atom_site_label_1
 _geom_bond_atom_site_label_2
 _geom_bond_distance
 _geom_bond_site_symmetry_2
 _geom_bond_publ_flag
C1 C2 1.388(4) . ? 
C1 C11a 1.395(3) . ? 
C1 H1 0.9500 . ? 
C2 C3 1.393(4) . ? 
C2 H2 0.9500 . ? 
C3 C4 1.395(3) . ? 
C3 H3 0.9500 . ? 
C4 C4a 1.383(3) . ? 
C4 H4 0.9500 . ? 
C4a C11a 1.402(3) . ? 
C4a N5 1.442(3) . ? 
N5 C51 1.354(3) . ? 
N5 C6 1.479(3) . ? 
C6 C6a 1.538(3) . ? 
C6 C61 1.538(3) . ? 
C6 H6 1.0000 . ? 
C6a C7 1.390(3) . ? 
C6a C10a 1.423(3) . ? 
C7 C8 1.390(3) . ? 
C7 H7 0.9500 . ? 
C8 C9 1.386(3) . ? 
C8 H8 0.9500 . ? 
C9 C10 1.386(3) . ? 
C9 H9 0.9500 . ? 
C10 C10a 1.401(3) . ? 
C10 H10 0.9500 . ? 
C10a C11 1.532(3) . ? 
C11 C11a 1.533(3) . ? 
C11 C111 1.536(3) . ? 
C11 H11 1.0000 . ? 
C51 O51 1.249(3) . ? 
C51 C52 1.506(3) . ? 
C52 H52A 0.9800 . ? 
C52 H52B 0.9800 . ? 
C52 H52C 0.9800 . ? 
C61 O62 1.207(3) . ? 
C61 O61 1.328(3) . ? 
O61 H61 0.8602 . ? 
C111 C112 1.523(4) . ? 
C111 H11A 0.9900 . ? 
C111 H11B 0.9900 . ? 
C112 H12A 0.9800 . ? 
C112 H12B 0.9800 . ? 
C112 H12C 0.9800 . ? 

loop_
 _geom_angle_atom_site_label_1
 _geom_angle_atom_site_label_2
 _geom_angle_atom_site_label_3
 _geom_angle
 _geom_angle_site_symmetry_1
 _geom_angle_site_symmetry_3
 _geom_angle_publ_flag
C2 C1 C11a 120.9(2) . . ? 
C2 C1 H1 119.5 . . ? 
C11a C1 H1 119.5 . . ? 
C1 C2 C3 120.7(2) . . ? 
C1 C2 H2 119.6 . . ? 
C3 C2 H2 119.6 . . ? 
C2 C3 C4 119.1(2) . . ? 
C2 C3 H3 120.4 . . ? 
C4 C3 H3 120.4 . . ? 
C4a C4 C3 119.6(2) . . ? 
C4a C4 H4 120.2 . . ? 
C3 C4 H4 120.2 . . ? 
C4 C4a C11a 122.1(2) . . ? 
C4 C4a N5 120.27(19) . . ? 
C11a C4a N5 117.61(19) . . ? 
C51 N5 C4a 121.36(18) . . ? 
C51 N5 C6 117.57(18) . . ? 
C4a N5 C6 121.06(17) . . ? 
N5 C6 C6a 114.16(18) . . ? 
N5 C6 C61 108.54(17) . . ? 
C6a C6 C61 112.80(19) . . ? 
N5 C6 H6 107.0 . . ? 
C6a C6 H6 107.0 . . ? 
C61 C6 H6 107.0 . . ? 
C7 C6a C10a 118.7(2) . . ? 
C7 C6a C6 119.6(2) . . ? 
C10a C6a C6 121.6(2) . . ? 
C8 C7 C6a 121.6(2) . . ? 
C8 C7 H7 119.2 . . ? 
C6a C7 H7 119.2 . . ? 
C9 C8 C7 120.0(2) . . ? 
C9 C8 H8 120.0 . . ? 
C7 C8 H8 120.0 . . ? 
C8 C9 C10 119.2(2) . . ? 
C8 C9 H9 120.4 . . ? 
C10 C9 H9 120.4 . . ? 
C9 C10 C10a 122.0(2) . . ? 
C9 C10 H10 119.0 . . ? 
C10a C10 H10 119.0 . . ? 
C10 C10a C6a 118.4(2) . . ? 
C10 C10a C11 120.5(2) . . ? 
C6a C10a C11 120.8(2) . . ? 
C10a C11 C11a 103.51(18) . . ? 
C10a C11 C111 114.78(19) . . ? 
C11a C11 C111 115.41(19) . . ? 
C10a C11 H11 107.6 . . ? 
C11a C11 H11 107.6 . . ? 
C111 C11 H11 107.6 . . ? 
C1 C11a C4a 117.4(2) . . ? 
C1 C11a C11 125.3(2) . . ? 
C4a C11a C11 116.87(19) . . ? 
O51 C51 N5 120.3(2) . . ? 
O51 C51 C52 121.4(2) . . ? 
N5 C51 C52 118.30(19) . . ? 
C51 C52 H52A 109.5 . . ? 
C51 C52 H52B 109.5 . . ? 
H52A C52 H52B 109.5 . . ? 
C51 C52 H52C 109.5 . . ? 
H52A C52 H52C 109.5 . . ? 
H52B C52 H52C 109.5 . . ? 
O62 C61 O61 125.0(2) . . ? 
O62 C61 C6 123.3(2) . . ? 
O61 C61 C6 111.64(18) . . ? 
C61 O61 H61 110.7 . . ? 
C112 C111 C11 111.7(2) . . ? 
C112 C111 H11A 109.3 . . ? 
C11 C111 H11A 109.3 . . ? 
C112 C111 H11B 109.3 . . ? 
C11 C111 H11B 109.3 . . ? 
H11A C111 H11B 108.0 . . ? 
C111 C112 H12A 109.5 . . ? 
C111 C112 H12B 109.5 . . ? 
H12A C112 H12B 109.5 . . ? 
C111 C112 H12C 109.5 . . ? 
H12A C112 H12C 109.5 . . ? 
H12B C112 H12C 109.5 . . ? 

loop_
 _geom_torsion_atom_site_label_1
 _geom_torsion_atom_site_label_2
 _geom_torsion_atom_site_label_3
 _geom_torsion_atom_site_label_4
 _geom_torsion
 _geom_torsion_site_symmetry_1
 _geom_torsion_site_symmetry_2
 _geom_torsion_site_symmetry_3
 _geom_torsion_site_symmetry_4
 _geom_torsion_publ_flag
C11a C1 C2 C3 -1.3(4) . . . . ? 
C1 C2 C3 C4 2.1(4) . . . . ? 
C2 C3 C4 C4a -0.1(4) . . . . ? 
C3 C4 C4a C11a -2.7(4) . . . . ? 
C3 C4 C4a N5 176.0(2) . . . . ? 
C4 C4a N5 C51 -70.0(3) . . . . ? 
C11a C4a N5 C51 108.7(2) . . . . ? 
C4 C4a N5 C6 109.3(2) . . . . ? 
C11a C4a N5 C6 -72.0(3) . . . . ? 
C51 N5 C6 C6a -158.55(19) . . . . ? 
C4a N5 C6 C6a 22.1(3) . . . . ? 
C51 N5 C6 C61 74.7(2) . . . . ? 
C4a N5 C6 C61 -104.7(2) . . . . ? 
N5 C6 C6a C7 -141.2(2) . . . . ? 
C61 C6 C6a C7 -16.7(3) . . . . ? 
N5 C6 C6a C10a 42.9(3) . . . . ? 
C61 C6 C6a C10a 167.43(19) . . . . ? 
C10a C6a C7 C8 2.2(3) . . . . ? 
C6 C6a C7 C8 -173.8(2) . . . . ? 
C6a C7 C8 C9 1.0(4) . . . . ? 
C7 C8 C9 C10 -3.0(3) . . . . ? 
C8 C9 C10 C10a 1.8(3) . . . . ? 
C9 C10 C10a C6a 1.4(3) . . . . ? 
C9 C10 C10a C11 -172.7(2) . . . . ? 
C7 C6a C10a C10 -3.4(3) . . . . ? 
C6 C6a C10a C10 172.6(2) . . . . ? 
C7 C6a C10a C11 170.7(2) . . . . ? 
C6 C6a C10a C11 -13.4(3) . . . . ? 
C10 C10a C11 C11a 108.4(2) . . . . ? 
C6a C10a C11 C11a -65.6(3) . . . . ? 
C10 C10a C11 C111 -18.3(3) . . . . ? 
C6a C10a C11 C111 167.7(2) . . . . ? 
C2 C1 C11a C4a -1.4(3) . . . . ? 
C2 C1 C11a C11 171.5(2) . . . . ? 
C4 C4a C11a C1 3.4(3) . . . . ? 
N5 C4a C11a C1 -175.3(2) . . . . ? 
C4 C4a C11a C11 -170.1(2) . . . . ? 
N5 C4a C11a C11 11.2(3) . . . . ? 
C10a C11 C11a C1 -103.1(3) . . . . ? 
C111 C11 C11a C1 23.1(4) . . . . ? 
C10a C11 C11a C4a 69.8(2) . . . . ? 
C111 C11 C11a C4a -163.9(2) . . . . ? 
C4a N5 C51 O51 178.7(2) . . . . ? 
C6 N5 C51 O51 -0.7(3) . . . . ? 
C4a N5 C51 C52 -1.5(3) . . . . ? 
C6 N5 C51 C52 179.1(2) . . . . ? 
N5 C6 C61 O62 24.4(3) . . . . ? 
C6a C6 C61 O62 -103.1(3) . . . . ? 
N5 C6 C61 O61 -155.01(18) . . . . ? 
C6a C6 C61 O61 77.5(2) . . . . ? 
C10a C11 C111 C112 -168.0(2) . . . . ? 
C11a C11 C111 C112 71.7(3) . . . . ? 

loop_
 _geom_hbond_atom_site_label_D
 _geom_hbond_atom_site_label_H
 _geom_hbond_atom_site_label_A
 _geom_hbond_distance_DH
 _geom_hbond_distance_HA
 _geom_hbond_distance_DA
 _geom_hbond_angle_DHA
 _geom_hbond_site_symmetry_A
 _geom_hbond_publ_flag
#
# Hydrogen bonding scheme
# ======== ======= ======
#
# D   H    A   D-H   H...A  D...A    D-H...A  symm  publ
# -   -    -   ---   -----  -----    -------  ----  ----
 O61  H61  O51 0.86  1.83   2.672(2) 167      2_545 no
 C2   H2   O51 0.95  2.49   3.309(3) 144      1_656 no
 C112 H12A O62 0.98  2.46   3.418(4) 165      2_656 no

#======================================================================


_iucr_refine_instructions_details
;
TITL CM45F8
CELL  0.71073   8.8053  10.9821   9.0080   90.000  118.510   90.000
ZERR     2.00   0.0003   0.0004   0.0006    0.000    0.003    0.000
LATT  -1
SYMM  - X, 1/2 + Y, - Z
SFAC  C    H    N    O
UNIT  38   38   2    6
MERG   4
OMIT    -2.00 55.00
FMAP   2
PLAN   20
SIZE     0.10   0.14   0.26
ACTA
BOND   $H
CONF
HTAB
OMIT 1 1 0
OMIT -1 1 1
LIST   4
L.S.   8
TEMP  -153.00
WGHT    0.035100    0.165700
FVAR       1.39751
C1    1    0.642443    0.594154    0.793875    11.00000    0.02140    0.01683 =
         0.01327   -0.00034    0.00478   -0.00213
AFIX  43
H1    2    0.659873    0.615425    0.903129    11.00000   -1.20000
AFIX   0
C2    1    0.782781    0.559463    0.773119    11.00000    0.01629    0.01699 =
         0.02217    0.00353    0.00273   -0.00253
AFIX  43
H2    2    0.895282    0.558863    0.867841    11.00000   -1.20000
AFIX   0
C3    1    0.760432    0.525515    0.614880    11.00000    0.01584    0.01980 =
         0.02524    0.00519    0.01015    0.00176
AFIX  43
H3    2    0.856262    0.499287    0.601936    11.00000   -1.20000
AFIX   0
C4    1    0.595473    0.530554    0.475729    11.00000    0.01912    0.01446 =
         0.01678    0.00125    0.00906   -0.00022
AFIX  43
H4    2    0.577979    0.507917    0.366895    11.00000   -1.20000
AFIX   0
C4a   1    0.457563    0.568724    0.497261    11.00000    0.01382    0.01282 =
         0.01356    0.00214    0.00450   -0.00103
N5    3    0.288314    0.581975    0.353266    11.00000    0.01198    0.01373 =
         0.01166    0.00100    0.00383   -0.00105
C6    1    0.146917    0.496600    0.324411    11.00000    0.01169    0.01480 =
         0.01126   -0.00015    0.00490   -0.00064
AFIX  13
H6    2    0.038938    0.546079    0.283111    11.00000   -1.20000
AFIX   0
C6a   1    0.171355    0.429513    0.484153    11.00000    0.01329    0.01757 =
         0.01355    0.00044    0.00709    0.00104
C7    1    0.124326    0.307677    0.473724    11.00000    0.01560    0.02008 =
         0.01506   -0.00192    0.00609   -0.00038
AFIX  43
H7    2    0.088369    0.265234    0.370398    11.00000   -1.20000
AFIX   0
C8    1    0.128614    0.246451    0.610695    11.00000    0.01770    0.01619 =
         0.02174    0.00087    0.00851   -0.00276
AFIX  43
H8    2    0.097654    0.162826    0.600826    11.00000   -1.20000
AFIX   0
C9    1    0.178015    0.307296    0.761647    11.00000    0.01733    0.02220 =
         0.01834    0.00538    0.00971    0.00082
AFIX  43
H9    2    0.175933    0.267006    0.853983    11.00000   -1.20000
AFIX   0
C10   1    0.230502    0.427676    0.776204    11.00000    0.01718    0.02418 =
         0.01352   -0.00059    0.00685    0.00203
AFIX  43
H10   2    0.267411    0.468531    0.880811    11.00000   -1.20000
AFIX   0
C10a  1    0.230749    0.490913    0.641243    11.00000    0.01246    0.01667 =
         0.01623    0.00016    0.00684    0.00056
C11   1    0.309683    0.618540    0.667747    11.00000    0.01523    0.01672 =
         0.01353   -0.00154    0.00732   -0.00093
AFIX  13
H11   2    0.230748    0.669420    0.568637    11.00000   -1.20000
AFIX   0
C11a  1    0.476255    0.598216    0.656614    11.00000    0.01843    0.00976 =
         0.01565    0.00055    0.00829   -0.00105
 
C51   1    0.253368    0.672019    0.238787    11.00000    0.01680    0.01421 =
         0.01210   -0.00198    0.00743    0.00042
O51   4    0.106700    0.680430    0.113386    11.00000    0.01608    0.01859 =
         0.01499    0.00249    0.00402    0.00048
C52   1    0.395047    0.760869    0.267480    11.00000    0.02070    0.01620 =
         0.01940    0.00286    0.00916   -0.00096
AFIX 137
H52A  2    0.478434    0.721879    0.239710    11.00000   -1.50000
H52B  2    0.453745    0.786182    0.386198    11.00000   -1.50000
H52C  2    0.345169    0.832372    0.195207    11.00000   -1.50000
AFIX   0
 
C61   1    0.120819    0.409307    0.180594    11.00000    0.01761    0.01275 =
         0.01168    0.00224    0.00579    0.00012
O61   4   -0.038667    0.364738    0.102914    11.00000    0.01765    0.02128 =
         0.01495   -0.00650    0.00617   -0.00452
AFIX   3
H61   2   -0.048669    0.310674    0.029683    11.00000   -1.50000
AFIX   0
O62   4    0.232707    0.386081    0.143759    11.00000    0.02212    0.02519 =
         0.02409   -0.00624    0.01436   -0.00241
 
C111  1    0.332488    0.683745    0.827992    11.00000    0.02428    0.01948 =
         0.01756   -0.00357    0.01064   -0.00184
AFIX  23
H11A  2    0.224713    0.676059    0.836195    11.00000   -1.20000
H11B  2    0.426599    0.644010    0.928445    11.00000   -1.20000
AFIX   0
C112  1    0.375182    0.818096    0.827218    11.00000    0.02653    0.02084 =
         0.02483   -0.00653    0.01506   -0.00313
AFIX 137
H12A  2    0.482058    0.825982    0.819501    11.00000   -1.50000
H12B  2    0.390518    0.856476    0.931702    11.00000   -1.50000
H12C  2    0.280435    0.858256    0.729953    11.00000   -1.50000
HKLF 4
 
REM  CM45F8
REM R1 =  0.0360 for   1638 Fo > 4sig(Fo)  and  0.0455 for all   1851 data
REM    210 parameters refined using      1 restraints
 
END  
     
WGHT      0.0351      0.1657 
REM Highest difference peak  0.209,  deepest hole -0.240,  1-sigma level  0.047
Q1    1   0.1374  0.4513  0.2451  11.00000  0.05    0.21
Q2    1   0.5006  0.7306  0.7023  11.00000  0.05    0.18
Q3    1   0.2063  0.4551  0.5588  11.00000  0.05    0.18
Q4    1   0.2180  0.5354  0.3391  11.00000  0.05    0.17
Q5    1   0.6831  0.6851  0.9667  11.00000  0.05    0.17
Q6    1   0.0732  0.0693  0.6018  11.00000  0.05    0.17
Q7    1   0.6020  0.8659  0.3678  11.00000  0.05    0.17
Q8    1   0.5105  0.9084  0.2589  11.00000  0.05    0.16
Q9    1   0.5204  0.7451  0.5750  11.00000  0.05    0.16
Q10   1   0.4683  0.5985  0.5722  11.00000  0.05    0.16
Q11   1   0.6412  0.7835  0.4017  11.00000  0.05    0.15
Q12   1   0.1569  0.5382  0.0448  11.00000  0.05    0.15
Q13   1   0.4688  0.7959  0.5012  11.00000  0.05    0.15
Q14   1   0.7544  0.4002  0.4802  11.00000  0.05    0.15
Q15   1   0.5796  0.8187  0.5697  11.00000  0.05    0.15
Q16   1   0.3044  0.2205  0.6197  11.00000  0.05    0.15
Q17   1   0.1886  0.2243  1.0318  11.00000  0.05    0.15
Q18   1   0.2287  0.7530  0.4991  11.00000  0.05    0.14
Q19   1   0.8512  0.4325  0.9053  11.00000  0.05    0.14
Q20   1   0.5138  0.7749  0.3766  11.00000  0.05    0.14
;

# start Validation Reply Form
_vrf_PUBL005_GLOBAL
;
PROBLEM: _publ_contact_author_email, _publ_contact_author_fax and
RESPONSE: Example CIF
;
# end Validation Reply Form

#======================================================================
#                         END of CIF
#======================================================================

`


exports.exampleFiles = exampleFiles;