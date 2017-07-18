-- phpMyAdmin SQL Dump
-- version 4.3.13.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-07-2017 a las 16:08:37
-- Versión del servidor: 5.6.25
-- Versión de PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `undpresupuesto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anho`
--

CREATE TABLE IF NOT EXISTS `anho` (
  `idanho` int(11) NOT NULL,
  `anho` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int(11) NOT NULL,
  `numcategoria` varchar(20) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `numcategoria`, `descripcion`) VALUES
(1, '9', 'GEOFISICA'),
(2, '11', 'PERFORACION DE AVANZADA'),
(3, '12', 'PERFORACION DE DESARROLLO'),
(4, '10', 'PERFORACION EXPLORATORIA'),
(5, '13', 'RECUPERACION ADICIONAL'),
(6, '22', 'RECOMPLETACION DE POZOS'),
(7, '23', 'RECUPERACION SUPLEMENTARIA'),
(8, '24', 'INYECCION ALTERNA DE VAPOR'),
(9, '25', 'LEVANTAMIENTO ARTIFICIAL'),
(10, '26', 'CONSERVACION Y UTILIZACION DEL GAS'),
(11, '27', 'PLANTA DE LIQUIDOS Y GAS'),
(12, '28', 'INSTALACIONES DE PRODUCCION'),
(13, '29', 'OLEODUCTOS Y TERMINALES DE EMBARQUE'),
(14, '30', 'ALMACENAMIENTO'),
(15, '74', 'DESARROLLO URBANO'),
(16, '75', 'PROTECCION INTEGRAL'),
(17, '76', 'PREVENCION Y CONTROLDE PERDIDAS'),
(18, '84', 'TELECOMUNICACIONES'),
(19, '85', 'AUTOMATIZACION INDUSTRIAL'),
(20, '86', 'COMPUTACION Y SISTEMAS'),
(21, '91', 'EDIFICACIONES E INSTALACIONES INDUSTRIALES'),
(22, '93', 'EQUIPOS'),
(23, '98', 'OTRAS INVERSIONES'),
(24, 'HA ', 'HABILITADORA Y APO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE IF NOT EXISTS `direccion` (
  `iddir` int(11) NOT NULL,
  `iddir_iofk` int(11) NOT NULL,
  `idelefk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dir_io`
--

CREATE TABLE IF NOT EXISTS `dir_io` (
  `iddir_io` int(11) NOT NULL,
  `iddivfk` int(11) NOT NULL,
  `descdir` varchar(200) NOT NULL,
  `tipoiofk` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dir_io`
--

INSERT INTO `dir_io` (`iddir_io`, `iddivfk`, `descdir`, `tipoiofk`) VALUES
(1, 1, 'DIREPI', 1),
(2, 1, 'DIREPO', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distrito`
--

CREATE TABLE IF NOT EXISTS `distrito` (
  `iddistrito` int(11) NOT NULL,
  `idcomp` int(11) NOT NULL,
  `distrito` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `distrito`
--

INSERT INTO `distrito` (`iddistrito`, `idcomp`, `distrito`) VALUES
(1, 1, 'ORIENTAL'),
(2, 1, 'OCCIDENTAL'),
(3, 2, 'petrosucre'),
(4, 2, 'petrowarao'),
(5, 2, 'petrolera paria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `division`
--

CREATE TABLE IF NOT EXISTS `division` (
  `iddi` int(11) NOT NULL,
  `divisonopc` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `division`
--

INSERT INTO `division` (`iddi`, `divisonopc`) VALUES
(1, 'DIVISION ORIENTAL'),
(2, 'DIVISION OCCIDENTAL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dom`
--

CREATE TABLE IF NOT EXISTS `dom` (
  `idom` int(11) NOT NULL,
  `domvalor` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dom`
--

INSERT INTO `dom` (`idom`, `domvalor`) VALUES
(1, 'EP'),
(2, 'EM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elementocosto`
--

CREATE TABLE IF NOT EXISTS `elementocosto` (
  `idele` int(11) NOT NULL,
  `elemento` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `elementocosto`
--

INSERT INTO `elementocosto` (`idele`, `elemento`) VALUES
(1, 'Labor'),
(2, 'Beneficio y Bienestar'),
(3, 'Materiales'),
(4, 'Servicios y Contratos'),
(5, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emx`
--

CREATE TABLE IF NOT EXISTS `emx` (
  `idemx` int(11) NOT NULL,
  `emmixta` varchar(200) NOT NULL,
  `idiv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `emx`
--

INSERT INTO `emx` (`idemx`, `emmixta`, `idiv`) VALUES
(1, 'PETROSUCRE', 1),
(2, 'PETROWARAO', 1),
(3, 'PETROLERA PARIA', 1),
(4, 'CARDON IV', 2),
(5, 'PETROCUMAREBO', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gerencia`
--

CREATE TABLE IF NOT EXISTS `gerencia` (
  `idgere` int(11) NOT NULL,
  `siglas` varchar(30) NOT NULL,
  `gerehab` varchar(200) NOT NULL,
  `idtipo` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gerencia`
--

INSERT INTO `gerencia` (`idgere`, `siglas`, `gerehab`, `idtipo`) VALUES
(1, 'AMB', 'AMBIENTE', ''),
(2, 'AAJJ', 'ASUNTOS JURIDICOS', ''),
(3, 'AAPP', 'ASUNTOS PUBLICOS', ''),
(4, 'AUD', 'AUDITORIA', ''),
(5, 'CONT', 'CONTRATACIÓN', ''),
(6, 'COOP', 'COORDINACIÓN OPERACIONAL', ''),
(7, 'DSO', 'DESARROLLO SOCIAL', ''),
(8, 'DUR', 'DESARROLLO URBANO', ''),
(9, 'FNZ', 'FINANZAS', ''),
(10, 'GG', 'GERENCIA GENERAL DIV. COSTA AFUERA', ''),
(11, 'INGC', 'INGENIERIA DE COSTOS', ''),
(12, 'INGP', 'INGENIERIA DE PERFORACION ', ''),
(13, 'PPGD', 'PPYG DIVISIÓN', ''),
(14, 'PPGD', 'PPYG DISTRITO', ''),
(15, 'PCP', 'PCP', ''),
(16, 'PROC', 'PROPIEDAD Y CATASTRO ', ''),
(17, 'RRHH', 'RRHH', ''),
(18, 'RGUB', 'RELACIONES GUBERNAMENTALES ', ''),
(19, 'SAL', 'SALUD', ''),
(20, 'SIHO', 'SIHO', ''),
(21, 'SELE', 'SERVICIOS ELECTRICOS', ''),
(22, 'SLL', 'SERVICIO LOGISTICO', ''),
(23, 'SUBO', 'SUBGERENCIA OPERATIVA', ''),
(24, 'TRAA', 'TRANSPORTE AEREO', ''),
(25, 'TRAT', 'TRANSPORTE TERRESTRE', ''),
(26, 'DSYA', 'DESARROLLO DE YACIMIENTOS', ''),
(27, 'ESTY', 'ESTUDIOS DE YACIMIENTOS', ''),
(28, 'DCAR', 'DISTRITO CARÚPANO', ''),
(29, 'GGUI', 'GESTIÓN GÜIRIA', ''),
(30, 'MVIV', 'MISION VIVIENDA', ''),
(31, 'IFPC', 'INFRAESTRUCTURAS Y PROCESOS CARUPANO', ''),
(32, 'LOGM', 'LOGISTICA MARINA', ''),
(33, 'MNTC', 'MANTENIMIENTO CARUPANO', ''),
(34, 'OPPC', 'OPERACIONES PRODUCCION CARUPANO', ''),
(35, 'SCOR', 'SEGUROS CORPORATIVOS', ''),
(36, 'RURD', 'RAFAEL URDANETA (OCCIDENTAL)', ''),
(37, 'GDCO', 'GESTIÓN GDCO', ''),
(38, 'CONM', 'CONSTRUCCIÓN Y MANTENIMIENTO', ''),
(39, 'METG', 'METÓCEAN GEOTÉCNICA', ''),
(40, 'GSF', 'GASIFICACIÓN', ''),
(41, 'AIT', 'AIT', ''),
(42, 'OGER', 'OTRAS GERENCIAS', ''),
(43, 'CNSG', 'CONTROL Y SEGUIMIENTO', ''),
(44, 'ESTI', 'ESTUDIOS INTEGRADOS', ''),
(45, 'FRCP', 'FORMACIÓN Y CAPACITACIÓN ', ''),
(46, 'NNEG', 'NUEVOS NEGOCIOS', ''),
(47, 'OMNT', 'OPERACIÓN Y MANTENIMIENTO DE TALADRO', ''),
(48, 'IPCF', 'INGENIERIA DE PERFORACIÓN COSTA AFUERA', ''),
(49, 'CYRP', 'CONSTRUCCIÓN Y REHABILITACIÓN DE POZOS', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gereproyecto`
--

CREATE TABLE IF NOT EXISTS `gereproyecto` (
  `idgp` int(11) NOT NULL,
  `gp` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gereproyecto`
--

INSERT INTO `gereproyecto` (`idgp`, `gp`) VALUES
(1, 'PROYECTOS MAYORES'),
(2, 'GERENCIA DE DISTRITO CARUPANO'),
(3, 'GEOFISICA'),
(4, 'PUERTOS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `geretipo`
--

CREATE TABLE IF NOT EXISTS `geretipo` (
  `idgt` int(11) NOT NULL,
  `idgerefk` int(11) NOT NULL,
  `idtipoiofk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habelec`
--

CREATE TABLE IF NOT EXISTS `habelec` (
  `idhabelec` int(11) NOT NULL,
  `idhabfk` varchar(200) NOT NULL,
  `idelecfk` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habelec`
--

INSERT INTO `habelec` (`idhabelec`, `idhabfk`, `idelecfk`) VALUES
(1, '1', '1'),
(2, '1', '2'),
(3, '1', '3'),
(4, '1', '4'),
(5, '1', '5'),
(6, '1', '1'),
(7, '1', '2'),
(8, '1', '3'),
(9, '1', '4'),
(10, '1', '5'),
(11, '2', '1'),
(12, '2', '2'),
(13, '2', '3'),
(14, '2', '4'),
(15, '2', '5'),
(16, '2', '1'),
(17, '2', '2'),
(18, '2', '3'),
(19, '2', '4'),
(20, '2', '5'),
(21, '3', '1'),
(22, '3', '1'),
(23, '3', '2'),
(24, '3', '3'),
(25, '3', '4'),
(26, '3', '5'),
(27, '6', '1'),
(28, '6', '2'),
(29, '6', '3'),
(30, '6', '4'),
(31, '6', '5'),
(32, '7', '1'),
(33, '7', '2'),
(34, '7', '3'),
(35, '7', '4'),
(36, '7', '5'),
(37, '9', '1'),
(38, '9', '2'),
(39, '9', '3'),
(40, '9', '4'),
(41, '9', '5'),
(42, '9', '1'),
(43, '9', '2'),
(44, '9', '3'),
(45, '9', '4'),
(46, '9', '5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habilitadora`
--

CREATE TABLE IF NOT EXISTS `habilitadora` (
  `idhab` int(11) NOT NULL,
  `idgerencia` int(11) NOT NULL,
  `descriphab` varchar(200) NOT NULL,
  `idtipo_IO` int(11) NOT NULL,
  `tipodivfk` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habilitadora`
--

INSERT INTO `habilitadora` (`idhab`, `idgerencia`, `descriphab`, `idtipo_IO`, `tipodivfk`) VALUES
(1, 1, 'HIAMB1', 1, 5),
(2, 2, 'HIAAJJ1', 1, 5),
(3, 3, 'HIAAPP1', 1, 5),
(4, 4, 'HIAUD1', 1, 5),
(5, 4, 'HOAUD1', 2, 5),
(6, 5, 'HICONT1', 1, 5),
(7, 6, 'HICOOP1', 1, 5),
(8, 6, 'HOCOOP1', 2, 5),
(9, 7, 'HIDSO1', 1, 5),
(10, 8, 'HIDUR1', 1, 5),
(11, 9, 'HIFNZ1', 1, 5),
(12, 10, 'HIGG1', 1, 5),
(13, 11, 'HIINGC1', 1, 5),
(14, 12, 'HIINGP1', 1, 5),
(15, 13, 'HIPPGD1', 1, 5),
(16, 14, 'HIPPGD1', 1, 5),
(17, 15, 'HIPCP1', 1, 5),
(18, 16, 'HIPROC1', 1, 5),
(19, 17, 'HIRRHH1', 1, 5),
(20, 18, 'HIRGUB1', 1, 5),
(21, 19, 'HISAL1', 1, 5),
(22, 20, 'HISIHO1', 1, 5),
(23, 22, 'HISLL1', 1, 5),
(24, 23, 'HISUBO1', 1, 5),
(25, 24, 'HITRAA1', 1, 5),
(26, 25, 'HITRAT1', 1, 5),
(27, 26, 'HIDSYA1', 1, 4),
(28, 27, 'HIESTY1', 1, 4),
(29, 28, 'HIDCAR1', 1, 4),
(30, 29, 'HIGGUI1', 1, 5),
(31, 30, 'HIMVIV1', 1, 5),
(32, 31, 'HIIFPC1', 1, 4),
(33, 32, 'HILOGM1', 1, 4),
(34, 32, 'HOLOGM1', 2, 4),
(35, 33, 'HIMNTC1', 1, 4),
(36, 34, 'HIOPPC1', 1, 4),
(37, 36, 'HORURD1', 2, 3),
(38, 39, 'HIMETG1', 1, 4),
(39, 40, 'HOGSF1', 2, 5),
(40, 41, 'HOAIT1', 2, 5),
(41, 42, 'HOOGER1', 2, 5),
(42, 42, 'HOOGER1', 2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mejorv`
--

CREATE TABLE IF NOT EXISTS `mejorv` (
  `idmv` int(11) NOT NULL,
  `enero_mv` varchar(200) NOT NULL,
  `febrero_mv` varchar(200) NOT NULL,
  `marzo_mv` varchar(200) NOT NULL,
  `abril_mv` varchar(200) NOT NULL,
  `mayo_mv` varchar(200) NOT NULL,
  `junio_mv` varchar(200) NOT NULL,
  `julio_mv` varchar(200) NOT NULL,
  `agosto_mv` varchar(200) NOT NULL,
  `septiembre_mv` varchar(200) NOT NULL,
  `octubre_mv` varchar(200) NOT NULL,
  `noviembre_mv` varchar(200) NOT NULL,
  `diciembre_mv` varchar(200) NOT NULL,
  `idmonedafk` int(11) NOT NULL,
  `idprofk` int(11) NOT NULL,
  `idhabfk` int(11) NOT NULL,
  `iddirfk` int(11) NOT NULL,
  `anho` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mixta`
--

CREATE TABLE IF NOT EXISTS `mixta` (
  `idmixta` int(11) NOT NULL,
  `idem` int(11) NOT NULL,
  `idlele` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mixta`
--

INSERT INTO `mixta` (`idmixta`, `idem`, `idlele`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 1),
(7, 1, 1),
(8, 1, 2),
(9, 1, 3),
(10, 1, 4),
(11, 1, 5),
(12, 1, 1),
(13, 1, 2),
(14, 1, 3),
(15, 1, 4),
(16, 1, 5),
(17, 1, 1),
(18, 1, 2),
(19, 1, 3),
(20, 1, 4),
(21, 1, 5),
(22, 1, 1),
(23, 1, 2),
(24, 1, 3),
(25, 1, 4),
(26, 1, 5),
(27, 1, 1),
(28, 1, 2),
(29, 1, 3),
(30, 1, 4),
(31, 1, 5),
(32, 1, 1),
(33, 1, 2),
(34, 1, 3),
(35, 1, 4),
(36, 1, 5),
(37, 2, 1),
(38, 2, 1),
(39, 2, 2),
(40, 2, 3),
(41, 2, 4),
(42, 2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moneda`
--

CREATE TABLE IF NOT EXISTS `moneda` (
  `idmoneda` int(11) NOT NULL,
  `moneda` varchar(200) NOT NULL,
  `siglasm` varchar(20) NOT NULL,
  `idtasa` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `moneda`
--

INSERT INTO `moneda` (`idmoneda`, `moneda`, `siglasm`, `idtasa`) VALUES
(1, 'bolivares', 'BsF', 0),
(2, 'Dolares americanos', 'USD', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plan`
--

CREATE TABLE IF NOT EXISTS `plan` (
  `idplan` int(11) NOT NULL,
  `enero_p` varchar(200) NOT NULL,
  `febrero_p` varchar(200) NOT NULL,
  `marzo_p` varchar(200) NOT NULL,
  `abril_p` varchar(200) NOT NULL,
  `mayo_p` varchar(200) NOT NULL,
  `junio_p` varchar(200) NOT NULL,
  `julio_p` varchar(200) NOT NULL,
  `agosto_p` varchar(200) NOT NULL,
  `septiembre_p` varchar(200) NOT NULL,
  `octubre_p` varchar(200) NOT NULL,
  `noviembre_p` varchar(200) NOT NULL,
  `diciembre_p` varchar(200) NOT NULL,
  `idmoneda` int(11) NOT NULL,
  `idproyecto` int(11) NOT NULL,
  `idhab` int(11) NOT NULL,
  `iddirfk` int(11) NOT NULL,
  `idanho` int(11) NOT NULL,
  `tpfk` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `plan`
--

INSERT INTO `plan` (`idplan`, `enero_p`, `febrero_p`, `marzo_p`, `abril_p`, `mayo_p`, `junio_p`, `julio_p`, `agosto_p`, `septiembre_p`, `octubre_p`, `noviembre_p`, `diciembre_p`, `idmoneda`, `idproyecto`, `idhab`, `iddirfk`, `idanho`, `tpfk`) VALUES
(1, '23.87009476128', '41.88015905856', '59.89022335584', '77.90028765312', '95.9103519504', '113.92041624768', '131.93048054496', '131.93048054496', '131.93048054496', '131.93048054496', '131.93048054496', '13.960310035047', 1, 0, 1, 0, 2017, 0),
(2, '5.82432398688', '11.64864797376', '18.97297196064', '24.79729594752', '30.6216199344', '38.44594392128', '44.27026790816', '44.27026790816', '44.27026790816', '44.27026790816', '44.27026790816', '122.4205926034', 1, 0, 2, 0, 2017, 0),
(3, '0', '0', '3.65', '5.65', '5.65', '9.3', '9.3', '9.3', '9.3', '9.3', '9.3', '1.785012406883', 1, 0, 3, 0, 2017, 0),
(4, '23.945518103961', '57.159583607921', '91.123649111882', '124.26961715984', '157.4155852078', '192.00937379846', '225.80316238911', '225.80316238911', '225.80316238911', '225.80316238911', '225.80316238911', '6.8111805642789', 1, 0, 4, 0, 2017, 0),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 5, 0, 2017, 0),
(6, '10.421839', '20.843679', '31.265518', '41.687357', '52.109197', '62.531036', '72.952875', '72.952875', '72.952875', '72.952875', '72.952875', '10.366693400932', 1, 0, 16, 0, 2017, 0),
(7, '3.513332', '7.026664', '10.539996', '14.083328', '17.56666', '21.079992', '24.593324', '24.593324', '24.593324', '24.593324', '24.593324', '108.80572193964', 1, 0, 17, 0, 2017, 0),
(8, '0', '0', '0.7', '1.7', '4.7379', '4.7379', '4.7379', '4.7379', '4.7379', '4.7379', '4.7379', '0.000080995461648597', 1, 0, 18, 0, 2017, 0),
(9, '3.469639', '6.939277', '10.408916', '13.873555', '17.463194', '21.047832', '24.632471', '24.632471', '24.632471', '24.632471', '24.632471', '10.266501033928', 1, 0, 19, 0, 2017, 0),
(10, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 20, 0, 2017, 0),
(11, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 63, 0, 0, 2017, 0),
(12, '0', '-1.34', '-2.13', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 64, 0, 0, 2017, 0),
(13, '0', '0', '-3.21', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 65, 0, 0, 2017, 0),
(14, '-751272.44', '-751272.83', '-0.39', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, 2017, 0),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 2, 0, 0, 2017, 0),
(16, '0', '-24.77', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 3, 0, 0, 2017, 0),
(17, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 4, 0, 0, 2017, 0),
(18, '-1408279.58', '-1378010.38', '184256.1', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 5, 0, 0, 2017, 0),
(19, '297.36', '521.97', '280.75', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 6, 0, 0, 2017, 0),
(20, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 7, 0, 0, 2017, 0),
(21, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 8, 0, 0, 2017, 0),
(22, '-4671782.1', '-4671782.1', '1290.54', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 9, 0, 0, 2017, 0),
(23, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 10, 0, 0, 2017, 0),
(24, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 11, 0, 0, 2017, 0),
(25, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 12, 0, 0, 2017, 0),
(26, '0', '0', '-1.89', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 13, 0, 0, 2017, 0),
(27, '332378.57', '432476.42', '478019', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 14, 0, 0, 2017, 0),
(28, '564.57999999996', '164241.41', '651439.34', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 15, 0, 0, 2017, 0),
(29, '0', '-1.11', '-1.11', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 16, 0, 0, 2017, 0),
(30, '0', '-79.35', '-79.35', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 17, 0, 0, 2017, 0),
(31, '405336.98', '466871.95', '701004.3', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 18, 0, 0, 2017, 0),
(32, '377794.22', '633864.02', '752012.32', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 19, 0, 0, 2017, 0),
(33, '0', '-3.54', '-4.77', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 20, 0, 0, 2017, 0),
(34, '26607.76', '42885.76', '58661.9', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 21, 0, 0, 2017, 0),
(35, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 22, 0, 0, 2017, 0),
(36, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 23, 0, 0, 2017, 0),
(37, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 24, 0, 0, 2017, 0),
(38, '751.93', '1544.75', '31372.86', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 25, 0, 0, 2017, 0),
(39, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 26, 0, 0, 2017, 0),
(40, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 27, 0, 0, 2017, 0),
(41, '0', '16249.25', '37677.15', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 28, 0, 0, 2017, 0),
(42, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 29, 0, 0, 2017, 0),
(43, '3334.29', '13242.54', '17577.22', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 30, 0, 0, 2017, 0),
(44, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 31, 0, 0, 2017, 0),
(45, '36711.33', '59674.82', '71518.04', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 32, 0, 0, 2017, 0),
(46, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 33, 0, 0, 2017, 0),
(47, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 34, 0, 0, 2017, 0),
(48, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 35, 0, 0, 2017, 0),
(49, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 36, 0, 0, 2017, 0),
(50, '0', '150.32', '150', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 37, 0, 0, 2017, 0),
(51, '20', '20', '20', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 38, 0, 0, 2017, 0),
(52, '0', '-0.24', '-1.56', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 39, 0, 0, 2017, 0),
(53, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 40, 0, 0, 2017, 0),
(54, '0', '-5.36', '-5.36', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 41, 0, 0, 2017, 0),
(55, '149947.19', '189986.96', '226812.47', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 42, 0, 0, 2017, 0),
(56, '297432.47', '427980.17', '544529.22', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 43, 0, 0, 2017, 0),
(57, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 44, 0, 0, 2017, 0),
(58, '-101.71', '-46.74', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 45, 0, 0, 2017, 0),
(59, '4263.15', '130051.56', '130051.56', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 46, 0, 0, 2017, 0),
(60, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 47, 0, 0, 2017, 0),
(61, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 48, 0, 0, 2017, 0),
(62, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 49, 0, 0, 2017, 0),
(63, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 50, 0, 0, 2017, 0),
(64, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 51, 0, 0, 2017, 0),
(65, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 52, 0, 0, 2017, 0),
(66, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 53, 0, 0, 2017, 0),
(67, '14730.33', '24076.87', '31723.63', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 54, 0, 0, 2017, 0),
(68, '233376.03', '329053.09', '427834.64', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 55, 0, 0, 2017, 0),
(69, '0', '141.83', '74.24', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 56, 0, 0, 2017, 0),
(70, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 57, 0, 0, 2017, 0),
(71, '0', '0', '-1.14', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 58, 0, 0, 2017, 0),
(72, '0', '0', '698.34', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 59, 0, 0, 2017, 0),
(73, '-451394.79377', '-451394.79377', '0', '215.266', '0', '0', '0', '0', '0', '0', '0', '0', 2, 9, 0, 0, 2017, 0),
(74, '37.31', '37.29847', '37.29847', '37.29847', '0', '0', '0', '0', '0', '0', '0', '0', 2, 14, 0, 0, 2017, 0),
(75, '3.24', '1958.49551', '1958.49551', '1960.95464', '0', '0', '0', '0', '0', '0', '0', '0', 2, 15, 0, 0, 2017, 0),
(76, '0', '-36.90594', '-36.90594', '-36.90594', '0', '0', '0', '0', '0', '0', '0', '0', 2, 17, 0, 0, 2017, 0),
(77, '8995.45103', '26387.28251', '26387.28251', '26387.28251', '0', '0', '0', '0', '0', '0', '0', '0', 2, 19, 0, 0, 2017, 0),
(78, '24.19438', '24.19438', '46.51113', '46.51113', '0', '0', '0', '0', '0', '0', '0', '0', 2, 21, 0, 0, 2017, 0),
(79, '73.54056', '73.54056', '73.54056', '73.54056', '0', '0', '0', '0', '0', '0', '0', '0', 2, 42, 0, 0, 2017, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE IF NOT EXISTS `proyecto` (
  `idproyecto` int(11) NOT NULL,
  `renglon` varchar(200) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `idcategoria` int(11) NOT NULL,
  `iddivision` int(11) NOT NULL,
  `iddom` int(11) NOT NULL,
  `idemfk` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`idproyecto`, `renglon`, `titulo`, `idcategoria`, `iddivision`, `iddom`, `idemfk`) VALUES
(1, '2007-122P1301', 'PERFORACION-MARISCAL SUCR E-CPO DRAGON', 3, 1, 1, 0),
(2, '--2008-122P1301', 'PERF LOC DPSSD4-CAMPO DRA GON', 3, 1, 1, 0),
(3, '--2009-122P1301', 'POZO DR5A / LOCAL DPSSD10 DEL CAMP DRAG', 3, 1, 1, 0),
(4, '--2009-122P1302', 'PERFOR. DEL POZO D6/ TALA DRO ABAN PEARL', 3, 1, 1, 0),
(5, '2010-122P1301', 'GESTION DE PERFORACION DI V COSTA AFUERA', 3, 1, 1, 0),
(6, '--2010-122P1302', 'LOGISTICA OPERACIONAL - A POYO A POZOS', 3, 1, 1, 0),
(7, '--2010-122P1304', 'PERF. LOC - DPSSD9/POZO D R7 CAMPO DRAGON', 3, 1, 1, 0),
(8, '--2010-122P1305', 'PERF. LOC- DPSSD 5/ POZO DR9 CAMPO DRAGÓ', 3, 1, 1, 0),
(9, '--2010-122P1306', 'PERF LOC. DPSSD 11/ POZO DR 8 CAMPO DRAG', 3, 1, 1, 0),
(10, '--2010-122P1307', 'PERF. LOC- DPSSD 8/ POZO DR10 CAMPO DRAG', 3, 1, 1, 0),
(11, '--2011-122P1301', 'POZO DR11 LOCALIZACIÓN DP SSD7', 3, 1, 1, 0),
(12, '--2011-122P1302', 'PERF  CAMPO PATAO 5 / LOC . PSSDD 13', 3, 1, 1, 0),
(13, '--2012-122P1401', 'PERF LOC. PPSSD9 / CAMPO PATAO', 3, 1, 1, 0),
(14, '--2008-263G1201', 'GASODUCTOS SUBMARINOS ', 10, 1, 1, 0),
(15, '--2008-270G1201', 'PAGMI ', 11, 1, 1, 0),
(16, '--2007-285G1204', 'WHP-CONEXIONES ', 12, 1, 1, 0),
(17, '--2007-289G1201', 'CPF-UNIDAD CENTRAL DE PRO D PROY. COROCOR', 12, 1, 1, 0),
(18, '--2007-289P1302', 'PLATAFORMA MARISCAL SUCRE -CPO-DRAGON', 12, 1, 1, 0),
(19, '--2008-289P1301', 'SISTEMA SUBMAR MARISCAL S UCRE CAM.DRAGON', 12, 1, 1, 0),
(20, '--2009-263P1601', 'GASODUCTO MEJILLONES - RI O CARIBE', 12, 1, 1, 0),
(21, '--2009-289P1601', 'DESAR.INFRAEST.MEJILLONES RIO CARIBE', 12, 1, 1, 0),
(22, '--2013-292G1201', 'FACILID TRANSP CRUDO PEDE RNALES-COROCORO', 13, 1, 1, 0),
(23, '--2015-294G1201', 'CONTRUC E INST  MONOBOYA FSO NABARIMA', 13, 1, 1, 0),
(24, '--2007-670G1202', 'FSO-UNIDAD FLOTANTE DE AL MACENAMIENTO', 13, 1, 1, 0),
(25, '--2008-741P1302', 'INSTALACIONES MACARAPANA COSTA AFUERA', 15, 1, 1, 0),
(26, '--2010-741G1201', 'DESARROLLO URBANO DTTO GU IRIA', 15, 1, 1, 0),
(27, '--2010-741V3102', 'ADECUAC DE ESPACIOS P/ OF ICINAS CUMANA', 15, 1, 1, 0),
(28, '--2013-919V3101', 'ADEC GALPON TALLER MTTO M ECANICO CA', 15, 1, 1, 0),
(29, '--2010-749G1201', 'ADECUAC DE ESPACIOS PARA OFICINAS GUIRIA', 15, 1, 1, 0),
(30, '--2012-741V3101', 'CONSTRUCCIÓN DEL COMPLEJO PETROLERO CUMA', 15, 1, 1, 0),
(31, '--2013-419V3101', 'ACONDIC ESPAC LAB SALUD Y CTRO CAPACIT', 15, 1, 1, 0),
(32, '--2015-749G1201', 'ACONDIC  OFICINAS CASA GU ARAGUARITA C A', 15, 1, 1, 0),
(33, '--2015-749G1202', 'ADEC E INSTALAC OFICIN Y CLINICA GUIRIA', 15, 1, 1, 0),
(34, '--2016-741I1101', 'ADECUACIÓN OFIC GG COSTA AFUERA OCCIDENT', 15, 2, 1, 0),
(35, '--2016-749V3101', 'ADECUACION INSTALACIONES COMEDOR CA', 15, 1, 1, 0),
(36, '--2008-755P1301', 'BRIGADA DE BOMBEROS INDSU T. COSTA AFUERA', 16, 1, 1, 0),
(37, '--2010-759G1201', 'SEGURIDAD INDUSTRIAL DTTO GUIRIA', 16, 1, 1, 0),
(38, '--2010-759P1301', 'SEGURIDAD INDUSTRIAL DTTO CARUPANO', 16, 1, 1, 0),
(39, '--2010-760G1201', 'PROTECCION DE INSTALAC. P CP DTTO GUIRIA', 17, 1, 1, 0),
(40, '--2011-760V3101', 'PROYECTOS DE SEGURIDAD 20 11(PCP) COMPLEJ', 17, 1, 1, 0),
(41, '--2008-860G1201', 'EQUIPAMIENTO AIT - GDCO ', 20, 1, 1, 0),
(42, '--2010-860V3101', 'AIT DIV COSTA AFUERA ', 20, 1, 1, 0),
(43, '--2008-913G1201', 'CIGMA ', 21, 1, 1, 0),
(44, '--2012-939P1301', 'ADQ EQUIP MEDICOS CLINICA CARUPANO', 22, 1, 1, 0),
(45, '--2013-933G1201', 'ADQ EQUIP LOG MARINA (LOW BOY)', 22, 1, 1, 0),
(46, '--2013-934G1208', 'MTTO MAY  V EMBARCACIONES LOG MARINA', 22, 1, 1, 0),
(47, '--2013-939P1301', ' ADQ EQUIP MEDICOS CLINIC A CARUPANO', 22, 1, 1, 0),
(48, '--2014-939G1201', 'ADQ EQUIP SERV MEDICOS GU IRIA', 22, 1, 1, 0),
(49, '--2014-939G1202', 'ADQ EQUIP SALUD OCUPACION AL GUIRIA', 22, 1, 1, 0),
(50, '--2014-939V3101', 'ADQ EQUIP MEDICOS SERV ME DICOS CUMANA', 22, 1, 1, 0),
(51, '--2015-933P1301', 'ADQ AMBULANCIA TIPO III P ARA CARUPANO', 22, 1, 1, 0),
(52, '--2015-933V1301', 'ADQ AMBULANCIA TIPO III P ARA CUMANA', 22, 1, 1, 0),
(53, '--2015-933V3101', 'ADQUISICIÓN EQUIPOS TRANS PORTE AÉREO', 22, 1, 1, 0),
(54, '--2008-984G1201', 'ELECTRIFICACION DEL CIGMA ', 23, 1, 1, 0),
(55, '--2008-986G1201', 'GESTION - GDCO ', 23, 1, 1, 0),
(56, '--2008-986G1203', 'LOGISTICA OPERACIONAL GDC O', 23, 1, 1, 0),
(57, '--2009-983G1201', 'ADECUACION AEROPUERTOS ', 23, 1, 1, 0),
(58, '--2009-985G1201', 'ADECUACION  PUERTO DE HIE RRO', 23, 1, 1, 0),
(59, '--2016-983V3101', 'CONST HANGAR  MTTO Y RESG AERONAVES  CUM', 23, 1, 1, 0),
(60, '2010-741V3102', 'ADECUAC DE ESPACIOS PARA OFICINAS PARA LA DIVISION COSTA AFUERA OCCIDENTAL- PROYECTO RAFAEL URDANETA, PUNTO FIJO ESTADO FALCON', 15, 2, 1, 0),
(62, '2009-2894CO01', 'MEJORAS EN EL SISTEMA DE MEDICIÓN DE CAUDAL DE GAS POZOS ALMACENAMIENTO DE GAS.', 12, 1, 2, 1),
(63, '--2010-091G1201', 'ESTUDIOS METOCEAN DTTO GU IRIA', 1, 1, 1, 0),
(64, '--2010-091P1301', 'ESTUDIOS METOCEAN DTTO CA RUPANO', 1, 1, 1, 0),
(65, '--2010-091V3101', 'ESTUDIOS METOCEAN DIV COS TA AFUERA', 1, 1, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reales`
--

CREATE TABLE IF NOT EXISTS `reales` (
  `idreal` int(11) NOT NULL,
  `enero_r` varchar(200) NOT NULL,
  `febrero_r` varchar(200) NOT NULL,
  `marzo_r` varchar(200) NOT NULL,
  `abril_r` varchar(200) NOT NULL,
  `mayo_r` varchar(200) NOT NULL,
  `junio_r` varchar(200) NOT NULL,
  `julio_r` varchar(200) NOT NULL,
  `agosto_r` varchar(200) NOT NULL,
  `septiembre_r` varchar(200) NOT NULL,
  `octubre_r` varchar(200) NOT NULL,
  `noviembre_r` varchar(200) NOT NULL,
  `diciembre_r` varchar(200) NOT NULL,
  `idmoneda` int(11) NOT NULL,
  `idproyecto` int(11) NOT NULL,
  `idhab` int(11) NOT NULL,
  `iddirfk` int(11) NOT NULL,
  `idmixta` int(11) NOT NULL,
  `idanho` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reales`
--

INSERT INTO `reales` (`idreal`, `enero_r`, `febrero_r`, `marzo_r`, `abril_r`, `mayo_r`, `junio_r`, `julio_r`, `agosto_r`, `septiembre_r`, `octubre_r`, `noviembre_r`, `diciembre_r`, `idmoneda`, `idproyecto`, `idhab`, `iddirfk`, `idmixta`, `idanho`) VALUES
(1, '12.86761168', '25.42075537', '12.86761168', '', '', '', '', '', '', '', '', '', 1, 0, 6, 0, 0, 2017),
(2, '7.3136493', '12.68587559', '8.38943441', '', '', '', '', '', '', '', '', '', 1, 0, 7, 0, 0, 2017),
(3, '0', '0', '0', '', '', '', '', '', '', '', '', '', 1, 0, 8, 0, 0, 2017),
(4, '2.05888593', '6.9768373', '14.14676509', '', '', '', '', '', '', '', '', '', 1, 0, 9, 0, 0, 2017),
(5, '0', '0', '0', '', '', '', '', '', '', '', '', '', 1, 0, 10, 0, 0, 2017),
(6, '7.77945726', '', '', '', '', '', '', '', '', '', '', '', 1, 0, 11, 0, 0, 2017),
(7, '5.07351856', '', '', '', '', '', '', '', '', '', '', '', 1, 0, 12, 0, 0, 2017),
(8, '0', '', '', '', '', '', '', '', '', '', '', '', 1, 0, 13, 0, 0, 2017),
(9, '2.03249744', '', '', '', '', '', '', '', '', '', '', '', 1, 0, 14, 0, 0, 2017),
(10, '0', '', '', '', '', '', '', '', '', '', '', '', 1, 0, 15, 0, 0, 2017),
(11, '8.40552261', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 22, 0, 0, 2017),
(12, '5.63336543', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 23, 0, 0, 2017),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 24, 0, 0, 2017),
(14, '2.20728537', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 25, 0, 0, 2017),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 26, 0, 0, 2017),
(16, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 27, 0, 0, 2017),
(17, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 28, 0, 0, 2017),
(18, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 29, 0, 0, 2017),
(19, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 30, 0, 0, 2017),
(20, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 31, 0, 0, 2017),
(21, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 32, 0, 0, 2017),
(22, '0.1561', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 33, 0, 0, 2017),
(23, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 34, 0, 0, 2017),
(24, '1.0075', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 35, 0, 0, 2017),
(25, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 36, 0, 0, 2017),
(26, '16.09607281', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 37, 0, 0, 2017),
(27, '16.77078502', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 38, 0, 0, 2017),
(28, '0.34', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 39, 0, 0, 2017),
(29, '54.98316211', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 40, 0, 0, 2017),
(30, '64.20890438', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 0, 41, 0, 0, 2017),
(31, '3.09607281', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 2, 0, 42, 0, 0, 2017),
(32, '2.77078502', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 2, 0, 43, 0, 0, 2017),
(33, '0.34', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 2, 0, 44, 0, 0, 2017),
(34, '1.98316211', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 2, 0, 45, 0, 0, 2017),
(35, '1.20890438', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 2, 0, 46, 0, 0, 2017),
(36, '10', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 63, 0, 0, 0, 2017),
(37, '0', '-1.34', '-2.13', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 64, 0, 0, 0, 2017),
(38, '0', '0', '-3.21', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 65, 0, 0, 0, 2017),
(39, '-751272.44', '-751272.83', '-0.39', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 1, 0, 0, 0, 2017),
(40, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 2, 0, 0, 0, 2017),
(41, '0', '-24.77', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 3, 0, 0, 0, 2017),
(42, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 4, 0, 0, 0, 2017),
(43, '-1408279.58', '-1378010.38', '184256.1', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 5, 0, 0, 0, 2017),
(44, '297.36', '521.97', '280.75', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 6, 0, 0, 0, 2017),
(45, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 7, 0, 0, 0, 2017),
(46, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 8, 0, 0, 0, 2017),
(47, '-4671782.1', '-4671782.1', '1290.54', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 9, 0, 0, 0, 2017),
(48, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 10, 0, 0, 0, 2017),
(49, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 11, 0, 0, 0, 2017),
(50, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 12, 0, 0, 0, 2017),
(51, '0', '0', '-1.89', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 13, 0, 0, 0, 2017),
(52, '332378.57', '432476.42', '478019', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 14, 0, 0, 0, 2017),
(53, '564.57999999996', '164241.41', '651439.34', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 15, 0, 0, 0, 2017),
(54, '0', '-1.11', '-1.11', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 16, 0, 0, 0, 2017),
(55, '0', '-79.35', '-79.35', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 17, 0, 0, 0, 2017),
(56, '405336.98', '466871.95', '701004.3', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 18, 0, 0, 0, 2017),
(57, '377794.22', '633864.02', '752012.32', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 19, 0, 0, 0, 2017),
(58, '0', '-3.54', '-4.77', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 20, 0, 0, 0, 2017),
(59, '26607.76', '42885.76', '58661.9', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 21, 0, 0, 0, 2017),
(60, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 22, 0, 0, 0, 2017),
(61, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 23, 0, 0, 0, 2017),
(62, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 24, 0, 0, 0, 2017),
(63, '751.93', '1544.75', '31372.86', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 25, 0, 0, 0, 2017),
(64, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 26, 0, 0, 0, 2017),
(65, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 27, 0, 0, 0, 2017),
(66, '0', '16249.25', '37677.15', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 28, 0, 0, 0, 2017),
(67, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 29, 0, 0, 0, 2017),
(68, '3334.29', '13242.54', '17577.22', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 30, 0, 0, 0, 2017),
(69, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 31, 0, 0, 0, 2017),
(70, '36711.33', '59674.82', '71518.04', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 32, 0, 0, 0, 2017),
(71, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 33, 0, 0, 0, 2017),
(72, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 34, 0, 0, 0, 2017),
(73, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 35, 0, 0, 0, 2017),
(74, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 36, 0, 0, 0, 2017),
(75, '0', '150.32', '150', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 37, 0, 0, 0, 2017),
(76, '20', '20', '20', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 38, 0, 0, 0, 2017),
(77, '0', '-0.24', '-1.56', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 39, 0, 0, 0, 2017),
(78, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 40, 0, 0, 0, 2017),
(79, '0', '-5.36', '-5.36', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 41, 0, 0, 0, 2017),
(80, '149947.19', '189986.96', '226812.47', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 42, 0, 0, 0, 2017),
(81, '297432.47', '427980.17', '544529.22', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 43, 0, 0, 0, 2017),
(82, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 44, 0, 0, 0, 2017),
(83, '-101.71', '-46.74', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 45, 0, 0, 0, 2017),
(84, '4263.15', '130051.56', '130051.56', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 46, 0, 0, 0, 2017),
(85, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 47, 0, 0, 0, 2017),
(86, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 48, 0, 0, 0, 2017),
(87, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 49, 0, 0, 0, 2017),
(88, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 50, 0, 0, 0, 2017),
(89, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 51, 0, 0, 0, 2017),
(90, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 52, 0, 0, 0, 2017),
(91, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 53, 0, 0, 0, 2017),
(92, '14730.33', '24076.87', '31723.63', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 54, 0, 0, 0, 2017),
(93, '233376.03', '329053.09', '427834.64', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 55, 0, 0, 0, 2017),
(94, '0', '141.83', '74.24', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 56, 0, 0, 0, 2017),
(95, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 57, 0, 0, 0, 2017),
(96, '0', '0', '-1.14', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 58, 0, 0, 0, 2017),
(97, '0', '0', '698.34', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1, 59, 0, 0, 0, 2017),
(98, '-451394.79377', '-451394.79377', '0', '215.266', '0', '0', '0', '0', '0', '0', '0', '0', 2, 9, 0, 0, 0, 2017),
(99, '37.31', '37.29847', '37.29847', '37.29847', '0', '0', '0', '0', '0', '0', '0', '0', 2, 14, 0, 0, 0, 2017),
(100, '3.24', '1958.49551', '1958.49551', '1960.95464', '0', '0', '0', '0', '0', '0', '0', '0', 2, 15, 0, 0, 0, 2017),
(101, '0', '-36.90594', '-36.90594', '-36.90594', '0', '0', '0', '0', '0', '0', '0', '0', 2, 17, 0, 0, 0, 2017),
(102, '8995.45103', '26387.28251', '26387.28251', '26387.28251', '0', '0', '0', '0', '0', '0', '0', '0', 2, 19, 0, 0, 0, 2017),
(103, '24.19438', '24.19438', '46.51113', '46.51113', '0', '0', '0', '0', '0', '0', '0', '0', 2, 21, 0, 0, 0, 2017),
(104, '73.54056', '73.54056', '73.54056', '73.54056', '0', '0', '0', '0', '0', '0', '0', '0', 2, 42, 0, 0, 0, 2017);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasa`
--

CREATE TABLE IF NOT EXISTS `tasa` (
  `idtasa` int(11) NOT NULL,
  `tasa_cambio` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodiv`
--

CREATE TABLE IF NOT EXISTS `tipodiv` (
  `iddiv` int(11) NOT NULL,
  `descdiv` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipodiv`
--

INSERT INTO `tipodiv` (`iddiv`, `descdiv`) VALUES
(1, 'DIRECCION EJECUTIVA EP'),
(2, 'DIVISION ORIENTAL'),
(3, 'DIVISION OCCIDENTAL'),
(4, 'DTTO ORIENTAL'),
(5, 'ESFUERZO PROPIO'),
(6, 'DIRECCION EJECUTIVA COSTA AFUERA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoio`
--

CREATE TABLE IF NOT EXISTS `tipoio` (
  `idtipoIO` int(11) NOT NULL,
  `IO_descrip` varchar(50) NOT NULL,
  `proyect` varchar(200) NOT NULL,
  `habili` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipoio`
--

INSERT INTO `tipoio` (`idtipoIO`, `IO_descrip`, `proyect`, `habili`) VALUES
(1, 'Inversion', 'PI', 'HI'),
(2, 'Operacion', 'PO', 'HO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoplan`
--

CREATE TABLE IF NOT EXISTS `tipoplan` (
  `idtp` int(11) NOT NULL,
  `tipop` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipoplan`
--

INSERT INTO `tipoplan` (`idtp`, `tipop`) VALUES
(1, 'SOMETIDO'),
(2, 'FIRME'),
(3, 'APROBADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE IF NOT EXISTS `tipo_usuario` (
  `id` int(11) NOT NULL,
  `tipo` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id`, `tipo`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'ANALISTA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `indicador` varchar(200) NOT NULL,
  `contraseña` varchar(200) NOT NULL,
  `tipo_usuario_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `indicador`, `contraseña`, `tipo_usuario_id`) VALUES
(1, 'crucelis ', 'ramirez', 'RAMIREZCDG', 'd8578edf8458ce06fbc5bb76a58c5ca4', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anho`
--
ALTER TABLE `anho`
  ADD PRIMARY KEY (`idanho`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`iddir`);

--
-- Indices de la tabla `dir_io`
--
ALTER TABLE `dir_io`
  ADD PRIMARY KEY (`iddir_io`);

--
-- Indices de la tabla `distrito`
--
ALTER TABLE `distrito`
  ADD PRIMARY KEY (`iddistrito`);

--
-- Indices de la tabla `division`
--
ALTER TABLE `division`
  ADD PRIMARY KEY (`iddi`);

--
-- Indices de la tabla `dom`
--
ALTER TABLE `dom`
  ADD PRIMARY KEY (`idom`);

--
-- Indices de la tabla `elementocosto`
--
ALTER TABLE `elementocosto`
  ADD PRIMARY KEY (`idele`);

--
-- Indices de la tabla `gerencia`
--
ALTER TABLE `gerencia`
  ADD PRIMARY KEY (`idgere`);

--
-- Indices de la tabla `gereproyecto`
--
ALTER TABLE `gereproyecto`
  ADD PRIMARY KEY (`idgp`);

--
-- Indices de la tabla `geretipo`
--
ALTER TABLE `geretipo`
  ADD PRIMARY KEY (`idgt`);

--
-- Indices de la tabla `habelec`
--
ALTER TABLE `habelec`
  ADD PRIMARY KEY (`idhabelec`);

--
-- Indices de la tabla `habilitadora`
--
ALTER TABLE `habilitadora`
  ADD PRIMARY KEY (`idhab`);

--
-- Indices de la tabla `mejorv`
--
ALTER TABLE `mejorv`
  ADD PRIMARY KEY (`idmv`);

--
-- Indices de la tabla `mixta`
--
ALTER TABLE `mixta`
  ADD PRIMARY KEY (`idmixta`);

--
-- Indices de la tabla `moneda`
--
ALTER TABLE `moneda`
  ADD PRIMARY KEY (`idmoneda`);

--
-- Indices de la tabla `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`idplan`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`idproyecto`);

--
-- Indices de la tabla `reales`
--
ALTER TABLE `reales`
  ADD PRIMARY KEY (`idreal`);

--
-- Indices de la tabla `tasa`
--
ALTER TABLE `tasa`
  ADD PRIMARY KEY (`idtasa`);

--
-- Indices de la tabla `tipodiv`
--
ALTER TABLE `tipodiv`
  ADD PRIMARY KEY (`iddiv`);

--
-- Indices de la tabla `tipoio`
--
ALTER TABLE `tipoio`
  ADD PRIMARY KEY (`idtipoIO`);

--
-- Indices de la tabla `tipoplan`
--
ALTER TABLE `tipoplan`
  ADD PRIMARY KEY (`idtp`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`), ADD KEY `tipo_usuario_id` (`tipo_usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `anho`
--
ALTER TABLE `anho`
  MODIFY `idanho` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE `direccion`
  MODIFY `iddir` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `dir_io`
--
ALTER TABLE `dir_io`
  MODIFY `iddir_io` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `distrito`
--
ALTER TABLE `distrito`
  MODIFY `iddistrito` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `division`
--
ALTER TABLE `division`
  MODIFY `iddi` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `dom`
--
ALTER TABLE `dom`
  MODIFY `idom` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `elementocosto`
--
ALTER TABLE `elementocosto`
  MODIFY `idele` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `gerencia`
--
ALTER TABLE `gerencia`
  MODIFY `idgere` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT de la tabla `gereproyecto`
--
ALTER TABLE `gereproyecto`
  MODIFY `idgp` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `geretipo`
--
ALTER TABLE `geretipo`
  MODIFY `idgt` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `habelec`
--
ALTER TABLE `habelec`
  MODIFY `idhabelec` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT de la tabla `habilitadora`
--
ALTER TABLE `habilitadora`
  MODIFY `idhab` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT de la tabla `mejorv`
--
ALTER TABLE `mejorv`
  MODIFY `idmv` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `mixta`
--
ALTER TABLE `mixta`
  MODIFY `idmixta` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT de la tabla `moneda`
--
ALTER TABLE `moneda`
  MODIFY `idmoneda` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `plan`
--
ALTER TABLE `plan`
  MODIFY `idplan` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=80;
--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `idproyecto` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT de la tabla `reales`
--
ALTER TABLE `reales`
  MODIFY `idreal` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=105;
--
-- AUTO_INCREMENT de la tabla `tasa`
--
ALTER TABLE `tasa`
  MODIFY `idtasa` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tipodiv`
--
ALTER TABLE `tipodiv`
  MODIFY `iddiv` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `tipoio`
--
ALTER TABLE `tipoio`
  MODIFY `idtipoIO` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tipoplan`
--
ALTER TABLE `tipoplan`
  MODIFY `idtp` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
