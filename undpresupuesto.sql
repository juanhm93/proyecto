-- phpMyAdmin SQL Dump
-- version 4.3.13.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 08-06-2017 a las 21:24:11
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `numcategoria`, `descripcion`) VALUES
(1, '99', 'SIGLOS'),
(2, '09', 'GEOFISICA'),
(3, '12', 'PERFORACIÓN DE DES'),
(4, '26', 'CONSERVACIÓN Y UTI'),
(5, '27', 'PLANTAS DE LIQUIDO'),
(6, '28', 'INSTALACIONES DE P'),
(7, '29', 'OLEODUCTOS Y TERMI'),
(8, '74', 'DESARROLLO URBANO'),
(9, '75', 'PROTECCIÓN INTEGRA'),
(10, '76', 'PREVENCIÓN Y CONTR'),
(11, '86', 'COMPUTACIÓN Y SIST'),
(12, '91', 'EDIFICIOS E INSTAL'),
(13, '93', 'EQUIPOS'),
(14, '98', 'OTRAS INVERSIONES'),
(15, 'HA', 'HABILITADORA Y APO');

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `division`
--

INSERT INTO `division` (`iddi`, `divisonopc`) VALUES
(1, 'COSTA AFUERA ORIENTAL'),
(2, 'COSTA AFUERA OCCIDENTAL'),
(8, 'COMPLEMENTO'),
(9, 'OTRAS MAS PRUEBA');

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
(1, 'distrito'),
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
-- Estructura de tabla para la tabla `gerencia`
--

CREATE TABLE IF NOT EXISTS `gerencia` (
  `idgere` int(11) NOT NULL,
  `siglas` varchar(30) NOT NULL,
  `gerehab` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gerencia`
--

INSERT INTO `gerencia` (`idgere`, `siglas`, `gerehab`) VALUES
(1, 'AMB', 'ambiente'),
(2, '', 'Ambiente '),
(3, '', 'Asuntos Jurídicos'),
(4, '', 'Asuntos Públicos'),
(5, '', 'Auditoría'),
(6, '', 'Contratacion'),
(7, '', 'Coordinación Operacional'),
(8, '', 'Desarrollo Social'),
(9, '', 'Desarrollo Urbano'),
(10, '', 'Finanzas'),
(11, '', 'Gerencia General Costa Afuera'),
(12, '', 'Ingeneria de Costo'),
(13, '', 'Planificacion'),
(14, '', 'Prevencion Control y Pérdidas'),
(15, '', 'Propiedades y Catastro'),
(16, '', 'Recursos Humanos'),
(17, '', 'Relaciones Gubernamentales'),
(18, '', 'Salud'),
(19, '', 'Seguridad Industrial'),
(20, '', 'Servicios Eléctricos'),
(21, '', 'Servicios Logísticos'),
(22, '', 'Subgerencia Operativa'),
(23, '', 'Transporte Aéreo'),
(24, '', 'Transporte Terrestre'),
(25, '', 'Desarrollo de Yacimientos'),
(26, '', 'Dirección Ejecutiva'),
(27, '', 'Estudios de Yacimientos'),
(28, '', 'Distrito Carupano'),
(29, '', 'Distrito Guiria'),
(30, '', 'Misión Vivienda'),
(31, '', 'Infraestructura y Procesos Carupano'),
(32, '', 'Logistica Marina'),
(33, '', 'Mantenimiento Carupano'),
(34, '', 'Operaciones Producción Carupano'),
(35, '', 'METOCEAN GEOFISICA Y GEODESIA'),
(36, '', 'Rafael Urdaneta Costa Afuera'),
(37, '', 'MMBsF');

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
-- Estructura de tabla para la tabla `habilitadora`
--

CREATE TABLE IF NOT EXISTS `habilitadora` (
  `idhab` int(11) NOT NULL,
  `idgerencia` int(11) NOT NULL,
  `descriphab` varchar(200) NOT NULL,
  `idtipo_IO` int(11) NOT NULL,
  `idelementoc` int(11) NOT NULL,
  `idreal` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=351 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habilitadora`
--

INSERT INTO `habilitadora` (`idhab`, `idgerencia`, `descriphab`, `idtipo_IO`, `idelementoc`, `idreal`) VALUES
(1, 1, 'Ambiente Labor', 0, 1, 61),
(2, 1, 'Ambiente Beneficio y Bienestar', 0, 2, 62),
(3, 1, 'Ambiente Materiales', 0, 3, 63),
(4, 1, 'Ambiente Servicios y Contratos', 0, 4, 64),
(5, 1, 'Ambiente Otros', 0, 5, 65),
(6, 2, 'Asuntos JurídicosLabor', 0, 1, 66),
(7, 2, 'Asuntos JurídicosBeneficio y Bienestar', 0, 2, 67),
(8, 2, 'Asuntos JurídicosMateriales', 0, 3, 68),
(9, 2, 'Asuntos JurídicosServicios y Contratos', 0, 4, 69),
(10, 2, 'Asuntos JurídicosOtros', 0, 5, 70),
(11, 3, 'Asuntos PúblicosLabor', 0, 1, 71),
(12, 3, 'Asuntos PúblicosBeneficio y Bienestar', 0, 2, 72),
(13, 3, 'Asuntos PúblicosMateriales', 0, 3, 73),
(14, 3, 'Asuntos PúblicosServicios y Contratos', 0, 4, 74),
(15, 3, 'Asuntos PúblicosOtros', 0, 5, 75),
(16, 4, 'AuditoríaLabor', 0, 1, 76),
(17, 4, 'AuditoríaBeneficio y Bienestar', 0, 2, 77),
(18, 4, 'AuditoríaMateriales', 0, 3, 78),
(19, 4, 'AuditoríaServicios y Contratos', 0, 4, 79),
(20, 4, 'AuditoríaOtros', 0, 5, 80),
(21, 5, 'ContratacionLabor', 0, 1, 81),
(22, 5, 'ContratacionBeneficio y Bienestar', 0, 2, 82),
(23, 5, 'ContratacionMateriales', 0, 3, 83),
(24, 5, 'ContratacionServicios y Contratos', 0, 4, 84),
(25, 5, 'ContratacionOtros', 0, 5, 85),
(26, 6, 'Coordinación OperacionalLabor', 0, 1, 86),
(27, 6, 'Coordinación OperacionalBeneficio y Bienestar', 0, 2, 87),
(28, 6, 'Coordinación OperacionalMateriales', 0, 3, 88),
(29, 6, 'Coordinación OperacionalServicios y Contratos', 0, 4, 89),
(30, 6, 'Coordinación OperacionalOtros', 0, 5, 90),
(31, 7, 'Desarrollo SocialLabor', 0, 1, 91),
(32, 7, 'Desarrollo SocialBeneficio y Bienestar', 0, 2, 92),
(33, 7, 'Desarrollo SocialMateriales', 0, 3, 93),
(34, 7, 'Desarrollo SocialServicios y Contratos', 0, 4, 94),
(35, 7, 'Desarrollo SocialOtros', 0, 5, 95),
(36, 8, 'Desarrollo UrbanoLabor', 0, 1, 96),
(37, 8, 'Desarrollo UrbanoBeneficio y Bienestar', 0, 2, 97),
(38, 8, 'Desarrollo UrbanoMateriales', 0, 3, 98),
(39, 8, 'Desarrollo UrbanoServicios y Contratos', 0, 4, 99),
(40, 8, 'Desarrollo UrbanoOtros', 0, 5, 100),
(41, 9, 'FinanzasLabor', 0, 1, 101),
(42, 9, 'FinanzasBeneficio y Bienestar', 0, 2, 102),
(43, 9, 'FinanzasMateriales', 0, 3, 103),
(44, 9, 'FinanzasServicios y Contratos', 0, 4, 104),
(45, 9, 'FinanzasOtros', 0, 5, 105),
(46, 10, 'Gerencia General Costa AfueraLabor', 0, 1, 106),
(47, 10, 'Gerencia General Costa AfueraBeneficio y Bienestar', 0, 2, 107),
(48, 10, 'Gerencia General Costa AfueraMateriales', 0, 3, 108),
(49, 10, 'Gerencia General Costa AfueraServicios y Contratos', 0, 4, 109),
(50, 10, 'Gerencia General Costa AfueraOtros', 0, 5, 110),
(51, 11, 'Ingeneria de CostoLabor', 0, 1, 111),
(52, 11, 'Ingeneria de CostoBeneficio y Bienestar', 0, 2, 112),
(53, 11, 'Ingeneria de CostoMateriales', 0, 3, 113),
(54, 11, 'Ingeneria de CostoServicios y Contratos', 0, 4, 114),
(55, 11, 'Ingeneria de CostoOtros', 0, 5, 115),
(56, 12, 'PlanificacionLabor', 0, 1, 116),
(57, 12, 'PlanificacionBeneficio y Bienestar', 0, 2, 117),
(58, 12, 'PlanificacionMateriales', 0, 3, 118),
(59, 12, 'PlanificacionServicios y Contratos', 0, 4, 119),
(60, 12, 'PlanificacionOtros', 0, 5, 120),
(61, 13, 'Prevencion Control y PérdidasLabor', 0, 1, 121),
(62, 13, 'Prevencion Control y PérdidasBeneficio y Bienestar', 0, 2, 122),
(63, 13, 'Prevencion Control y PérdidasMateriales', 0, 3, 123),
(64, 13, 'Prevencion Control y PérdidasServicios y Contratos', 0, 4, 124),
(65, 13, 'Prevencion Control y PérdidasOtros', 0, 5, 125),
(66, 14, 'Propiedades y CatastroLabor', 0, 1, 126),
(67, 14, 'Propiedades y CatastroBeneficio y Bienestar', 0, 2, 127),
(68, 14, 'Propiedades y CatastroMateriales', 0, 3, 128),
(69, 14, 'Propiedades y CatastroServicios y Contratos', 0, 4, 129),
(70, 14, 'Propiedades y CatastroOtros', 0, 5, 130),
(71, 15, 'Recursos HumanosLabor', 0, 1, 131),
(72, 15, 'Recursos HumanosBeneficio y Bienestar', 0, 2, 132),
(73, 15, 'Recursos HumanosMateriales', 0, 3, 133),
(74, 15, 'Recursos HumanosServicios y Contratos', 0, 4, 134),
(75, 15, 'Recursos HumanosOtros', 0, 5, 135),
(76, 16, 'Relaciones GubernamentalesLabor', 0, 1, 136),
(77, 16, 'Relaciones GubernamentalesBeneficio y Bienestar', 0, 2, 137),
(78, 16, 'Relaciones GubernamentalesMateriales', 0, 3, 138),
(79, 16, 'Relaciones GubernamentalesServicios y Contratos', 0, 4, 139),
(80, 16, 'Relaciones GubernamentalesOtros', 0, 5, 140),
(81, 17, 'SaludLabor', 0, 1, 141),
(82, 17, 'SaludBeneficio y Bienestar', 0, 2, 142),
(83, 17, 'SaludMateriales', 0, 3, 143),
(84, 17, 'SaludServicios y Contratos', 0, 4, 144),
(85, 17, 'SaludOtros', 0, 5, 145),
(86, 18, 'Seguridad IndustrialLabor', 0, 1, 146),
(87, 18, 'Seguridad IndustrialBeneficio y Bienestar', 0, 2, 147),
(88, 18, 'Seguridad IndustrialMateriales', 0, 3, 148),
(89, 18, 'Seguridad IndustrialServicios y Contratos', 0, 4, 149),
(90, 18, 'Seguridad IndustrialOtros', 0, 5, 150),
(91, 19, 'Servicios EléctricosLabor', 0, 1, 151),
(92, 19, 'Servicios EléctricosBeneficio y Bienestar', 0, 2, 152),
(93, 19, 'Servicios EléctricosMateriales', 0, 3, 153),
(94, 19, 'Servicios EléctricosServicios y Contratos', 0, 4, 154),
(95, 19, 'Servicios EléctricosOtros', 0, 5, 155),
(96, 20, 'Servicios LogísticosLabor', 0, 1, 156),
(97, 20, 'Servicios LogísticosBeneficio y Bienestar', 0, 2, 157),
(98, 20, 'Servicios LogísticosMateriales', 0, 3, 158),
(99, 20, 'Servicios LogísticosServicios y Contratos', 0, 4, 159),
(100, 20, 'Servicios LogísticosOtros', 0, 5, 160),
(101, 21, 'Subgerencia OperativaLabor', 0, 1, 161),
(102, 21, 'Subgerencia OperativaBeneficio y Bienestar', 0, 2, 162),
(103, 21, 'Subgerencia OperativaMateriales', 0, 3, 163),
(104, 21, 'Subgerencia OperativaServicios y Contratos', 0, 4, 164),
(105, 21, 'Subgerencia OperativaOtros', 0, 5, 165),
(106, 22, 'Transporte AéreoLabor', 0, 1, 166),
(107, 22, 'Transporte AéreoBeneficio y Bienestar', 0, 2, 167),
(108, 22, 'Transporte AéreoMateriales', 0, 3, 168),
(109, 22, 'Transporte AéreoServicios y Contratos', 0, 4, 169),
(110, 22, 'Transporte AéreoOtros', 0, 5, 170),
(111, 23, 'Transporte TerrestreLabor', 0, 1, 171),
(112, 23, 'Transporte TerrestreBeneficio y Bienestar', 0, 2, 172),
(113, 23, 'Transporte TerrestreMateriales', 0, 3, 173),
(114, 23, 'Transporte TerrestreServicios y Contratos', 0, 4, 174),
(115, 23, 'Transporte TerrestreOtros', 0, 5, 175),
(116, 24, 'Desarrollo de YacimientosLabor', 0, 1, 176),
(117, 24, 'Desarrollo de YacimientosBeneficio y Bienestar', 0, 2, 177),
(118, 24, 'Desarrollo de YacimientosMateriales', 0, 3, 178),
(119, 24, 'Desarrollo de YacimientosServicios y Contratos', 0, 4, 179),
(120, 24, 'Desarrollo de YacimientosOtros', 0, 5, 180),
(121, 25, 'Dirección EjecutivaLabor', 0, 1, 181),
(122, 25, 'Dirección EjecutivaBeneficio y Bienestar', 0, 2, 182),
(123, 25, 'Dirección EjecutivaMateriales', 0, 3, 183),
(124, 25, 'Dirección EjecutivaServicios y Contratos', 0, 4, 184),
(125, 25, 'Dirección EjecutivaOtros', 0, 5, 185),
(126, 26, 'Estudios de YacimientosLabor', 0, 1, 186),
(127, 26, 'Estudios de YacimientosBeneficio y Bienestar', 0, 2, 187),
(128, 26, 'Estudios de YacimientosMateriales', 0, 3, 188),
(129, 26, 'Estudios de YacimientosServicios y Contratos', 0, 4, 189),
(130, 26, 'Estudios de YacimientosOtros', 0, 5, 190),
(131, 27, 'Distrito CarupanoLabor', 0, 1, 191),
(132, 27, 'Distrito CarupanoBeneficio y Bienestar', 0, 2, 192),
(133, 27, 'Distrito CarupanoMateriales', 0, 3, 193),
(134, 27, 'Distrito CarupanoServicios y Contratos', 0, 4, 194),
(135, 27, 'Distrito CarupanoOtros', 0, 5, 195),
(136, 28, 'Distrito GuiriaLabor', 0, 1, 196),
(137, 28, 'Distrito GuiriaBeneficio y Bienestar', 0, 2, 197),
(138, 28, 'Distrito GuiriaMateriales', 0, 3, 198),
(139, 28, 'Distrito GuiriaServicios y Contratos', 0, 4, 199),
(140, 28, 'Distrito GuiriaOtros', 0, 5, 200),
(141, 29, 'Misión ViviendaLabor', 0, 1, 201),
(142, 29, 'Misión ViviendaBeneficio y Bienestar', 0, 2, 202),
(143, 29, 'Misión ViviendaMateriales', 0, 3, 203),
(144, 29, 'Misión ViviendaServicios y Contratos', 0, 4, 204),
(145, 29, 'Misión ViviendaOtros', 0, 5, 205),
(146, 30, 'Infraestructura y Procesos CarupanoLabor', 0, 1, 206),
(147, 30, 'Infraestructura y Procesos CarupanoBeneficio y Bienestar', 0, 2, 207),
(148, 30, 'Infraestructura y Procesos CarupanoMateriales', 0, 3, 208),
(149, 30, 'Infraestructura y Procesos CarupanoServicios y Contratos', 0, 4, 209),
(150, 30, 'Infraestructura y Procesos CarupanoOtros', 0, 5, 210),
(151, 31, 'Logistica MarinaLabor', 0, 1, 211),
(152, 31, 'Logistica MarinaBeneficio y Bienestar', 0, 2, 212),
(153, 31, 'Logistica MarinaMateriales', 0, 3, 213),
(154, 31, 'Logistica MarinaServicios y Contratos', 0, 4, 214),
(155, 31, 'Logistica MarinaOtros', 0, 5, 215),
(156, 32, 'Mantenimiento CarupanoLabor', 0, 1, 216),
(157, 32, 'Mantenimiento CarupanoBeneficio y Bienestar', 0, 2, 217),
(158, 32, 'Mantenimiento CarupanoMateriales', 0, 3, 218),
(159, 32, 'Mantenimiento CarupanoServicios y Contratos', 0, 4, 219),
(160, 32, 'Mantenimiento CarupanoOtros', 0, 5, 220),
(161, 33, 'Operaciones Producción CarupanoLabor', 0, 1, 221),
(162, 33, 'Operaciones Producción CarupanoBeneficio y Bienestar', 0, 2, 222),
(163, 33, 'Operaciones Producción CarupanoMateriales', 0, 3, 223),
(164, 33, 'Operaciones Producción CarupanoServicios y Contratos', 0, 4, 224),
(165, 33, 'Operaciones Producción CarupanoOtros', 0, 5, 225),
(166, 34, 'METOCEAN GEOFISICA Y GEODESIALabor', 0, 1, 226),
(167, 34, 'METOCEAN GEOFISICA Y GEODESIABeneficio y Bienestar', 0, 2, 227),
(168, 34, 'METOCEAN GEOFISICA Y GEODESIAMateriales', 0, 3, 228),
(169, 34, 'METOCEAN GEOFISICA Y GEODESIAServicios y Contratos', 0, 4, 229),
(170, 34, 'METOCEAN GEOFISICA Y GEODESIAOtros', 0, 5, 230),
(171, 35, 'Rafael Urdaneta Costa AfueraLabor', 0, 1, 231),
(172, 35, 'Rafael Urdaneta Costa AfueraBeneficio y Bienestar', 0, 2, 232),
(173, 35, 'Rafael Urdaneta Costa AfueraMateriales', 0, 3, 233),
(174, 35, 'Rafael Urdaneta Costa AfueraServicios y Contratos', 0, 4, 234),
(175, 35, 'Rafael Urdaneta Costa AfueraOtros', 0, 5, 235),
(176, 2, 'Ambiente Labor', 0, 1, 1),
(177, 2, 'Ambiente Beneficio y Bienestar', 0, 2, 2),
(178, 2, 'Ambiente Materiales', 0, 3, 3),
(179, 2, 'Ambiente Servicios y Contratos', 0, 4, 4),
(180, 2, 'Ambiente Otros', 0, 5, 5),
(181, 3, 'Asuntos JurídicosLabor', 0, 1, 6),
(182, 3, 'Asuntos JurídicosBeneficio y Bienestar', 0, 2, 7),
(183, 3, 'Asuntos JurídicosMateriales', 0, 3, 8),
(184, 3, 'Asuntos JurídicosServicios y Contratos', 0, 4, 9),
(185, 3, 'Asuntos JurídicosOtros', 0, 5, 10),
(186, 4, 'Asuntos PúblicosLabor', 0, 1, 11),
(187, 4, 'Asuntos PúblicosBeneficio y Bienestar', 0, 2, 12),
(188, 4, 'Asuntos PúblicosMateriales', 0, 3, 13),
(189, 4, 'Asuntos PúblicosServicios y Contratos', 0, 4, 14),
(190, 4, 'Asuntos PúblicosOtros', 0, 5, 15),
(191, 5, 'AuditoríaLabor', 0, 1, 16),
(192, 5, 'AuditoríaBeneficio y Bienestar', 0, 2, 17),
(193, 5, 'AuditoríaMateriales', 0, 3, 18),
(194, 5, 'AuditoríaServicios y Contratos', 0, 4, 19),
(195, 5, 'AuditoríaOtros', 0, 5, 20),
(196, 6, 'ContratacionLabor', 0, 1, 21),
(197, 6, 'ContratacionBeneficio y Bienestar', 0, 2, 22),
(198, 6, 'ContratacionMateriales', 0, 3, 23),
(199, 6, 'ContratacionServicios y Contratos', 0, 4, 24),
(200, 6, 'ContratacionOtros', 0, 5, 25),
(201, 7, 'Coordinación OperacionalLabor', 0, 1, 26),
(202, 7, 'Coordinación OperacionalBeneficio y Bienestar', 0, 2, 27),
(203, 7, 'Coordinación OperacionalMateriales', 0, 3, 28),
(204, 7, 'Coordinación OperacionalServicios y Contratos', 0, 4, 29),
(205, 7, 'Coordinación OperacionalOtros', 0, 5, 30),
(206, 8, 'Desarrollo SocialLabor', 0, 1, 31),
(207, 8, 'Desarrollo SocialBeneficio y Bienestar', 0, 2, 32),
(208, 8, 'Desarrollo SocialMateriales', 0, 3, 33),
(209, 8, 'Desarrollo SocialServicios y Contratos', 0, 4, 34),
(210, 8, 'Desarrollo SocialOtros', 0, 5, 35),
(211, 9, 'Desarrollo UrbanoLabor', 0, 1, 36),
(212, 9, 'Desarrollo UrbanoBeneficio y Bienestar', 0, 2, 37),
(213, 9, 'Desarrollo UrbanoMateriales', 0, 3, 38),
(214, 9, 'Desarrollo UrbanoServicios y Contratos', 0, 4, 39),
(215, 9, 'Desarrollo UrbanoOtros', 0, 5, 40),
(216, 10, 'FinanzasLabor', 0, 1, 41),
(217, 10, 'FinanzasBeneficio y Bienestar', 0, 2, 42),
(218, 10, 'FinanzasMateriales', 0, 3, 43),
(219, 10, 'FinanzasServicios y Contratos', 0, 4, 44),
(220, 10, 'FinanzasOtros', 0, 5, 45),
(221, 11, 'Gerencia General Costa AfueraLabor', 0, 1, 46),
(222, 11, 'Gerencia General Costa AfueraBeneficio y Bienestar', 0, 2, 47),
(223, 11, 'Gerencia General Costa AfueraMateriales', 0, 3, 48),
(224, 11, 'Gerencia General Costa AfueraServicios y Contratos', 0, 4, 49),
(225, 11, 'Gerencia General Costa AfueraOtros', 0, 5, 50),
(226, 12, 'Ingeneria de CostoLabor', 0, 1, 51),
(227, 12, 'Ingeneria de CostoBeneficio y Bienestar', 0, 2, 52),
(228, 12, 'Ingeneria de CostoMateriales', 0, 3, 53),
(229, 12, 'Ingeneria de CostoServicios y Contratos', 0, 4, 54),
(230, 12, 'Ingeneria de CostoOtros', 0, 5, 55),
(231, 13, 'PlanificacionLabor', 0, 1, 56),
(232, 13, 'PlanificacionBeneficio y Bienestar', 0, 2, 57),
(233, 13, 'PlanificacionMateriales', 0, 3, 58),
(234, 13, 'PlanificacionServicios y Contratos', 0, 4, 59),
(235, 13, 'PlanificacionOtros', 0, 5, 60),
(236, 14, 'Prevencion Control y PérdidasLabor', 0, 1, 61),
(237, 14, 'Prevencion Control y PérdidasBeneficio y Bienestar', 0, 2, 62),
(238, 14, 'Prevencion Control y PérdidasMateriales', 0, 3, 63),
(239, 14, 'Prevencion Control y PérdidasServicios y Contratos', 0, 4, 64),
(240, 14, 'Prevencion Control y PérdidasOtros', 0, 5, 65),
(241, 15, 'Propiedades y CatastroLabor', 0, 1, 66),
(242, 15, 'Propiedades y CatastroBeneficio y Bienestar', 0, 2, 67),
(243, 15, 'Propiedades y CatastroMateriales', 0, 3, 68),
(244, 15, 'Propiedades y CatastroServicios y Contratos', 0, 4, 69),
(245, 15, 'Propiedades y CatastroOtros', 0, 5, 70),
(246, 16, 'Recursos HumanosLabor', 0, 1, 71),
(247, 16, 'Recursos HumanosBeneficio y Bienestar', 0, 2, 72),
(248, 16, 'Recursos HumanosMateriales', 0, 3, 73),
(249, 16, 'Recursos HumanosServicios y Contratos', 0, 4, 74),
(250, 16, 'Recursos HumanosOtros', 0, 5, 75),
(251, 17, 'Relaciones GubernamentalesLabor', 0, 1, 76),
(252, 17, 'Relaciones GubernamentalesBeneficio y Bienestar', 0, 2, 77),
(253, 17, 'Relaciones GubernamentalesMateriales', 0, 3, 78),
(254, 17, 'Relaciones GubernamentalesServicios y Contratos', 0, 4, 79),
(255, 17, 'Relaciones GubernamentalesOtros', 0, 5, 80),
(256, 18, 'SaludLabor', 0, 1, 81),
(257, 18, 'SaludBeneficio y Bienestar', 0, 2, 82),
(258, 18, 'SaludMateriales', 0, 3, 83),
(259, 18, 'SaludServicios y Contratos', 0, 4, 84),
(260, 18, 'SaludOtros', 0, 5, 85),
(261, 19, 'Seguridad IndustrialLabor', 0, 1, 86),
(262, 19, 'Seguridad IndustrialBeneficio y Bienestar', 0, 2, 87),
(263, 19, 'Seguridad IndustrialMateriales', 0, 3, 88),
(264, 19, 'Seguridad IndustrialServicios y Contratos', 0, 4, 89),
(265, 19, 'Seguridad IndustrialOtros', 0, 5, 90),
(266, 20, 'Servicios EléctricosLabor', 0, 1, 91),
(267, 20, 'Servicios EléctricosBeneficio y Bienestar', 0, 2, 92),
(268, 20, 'Servicios EléctricosMateriales', 0, 3, 93),
(269, 20, 'Servicios EléctricosServicios y Contratos', 0, 4, 94),
(270, 20, 'Servicios EléctricosOtros', 0, 5, 95),
(271, 21, 'Servicios LogísticosLabor', 0, 1, 96),
(272, 21, 'Servicios LogísticosBeneficio y Bienestar', 0, 2, 97),
(273, 21, 'Servicios LogísticosMateriales', 0, 3, 98),
(274, 21, 'Servicios LogísticosServicios y Contratos', 0, 4, 99),
(275, 21, 'Servicios LogísticosOtros', 0, 5, 100),
(276, 22, 'Subgerencia OperativaLabor', 0, 1, 101),
(277, 22, 'Subgerencia OperativaBeneficio y Bienestar', 0, 2, 102),
(278, 22, 'Subgerencia OperativaMateriales', 0, 3, 103),
(279, 22, 'Subgerencia OperativaServicios y Contratos', 0, 4, 104),
(280, 22, 'Subgerencia OperativaOtros', 0, 5, 105),
(281, 23, 'Transporte AéreoLabor', 0, 1, 106),
(282, 23, 'Transporte AéreoBeneficio y Bienestar', 0, 2, 107),
(283, 23, 'Transporte AéreoMateriales', 0, 3, 108),
(284, 23, 'Transporte AéreoServicios y Contratos', 0, 4, 109),
(285, 23, 'Transporte AéreoOtros', 0, 5, 110),
(286, 24, 'Transporte TerrestreLabor', 0, 1, 111),
(287, 24, 'Transporte TerrestreBeneficio y Bienestar', 0, 2, 112),
(288, 24, 'Transporte TerrestreMateriales', 0, 3, 113),
(289, 24, 'Transporte TerrestreServicios y Contratos', 0, 4, 114),
(290, 24, 'Transporte TerrestreOtros', 0, 5, 115),
(291, 25, 'Desarrollo de YacimientosLabor', 0, 1, 116),
(292, 25, 'Desarrollo de YacimientosBeneficio y Bienestar', 0, 2, 117),
(293, 25, 'Desarrollo de YacimientosMateriales', 0, 3, 118),
(294, 25, 'Desarrollo de YacimientosServicios y Contratos', 0, 4, 119),
(295, 25, 'Desarrollo de YacimientosOtros', 0, 5, 120),
(296, 26, 'Dirección EjecutivaLabor', 0, 1, 121),
(297, 26, 'Dirección EjecutivaBeneficio y Bienestar', 0, 2, 122),
(298, 26, 'Dirección EjecutivaMateriales', 0, 3, 123),
(299, 26, 'Dirección EjecutivaServicios y Contratos', 0, 4, 124),
(300, 26, 'Dirección EjecutivaOtros', 0, 5, 125),
(301, 27, 'Estudios de YacimientosLabor', 0, 1, 126),
(302, 27, 'Estudios de YacimientosBeneficio y Bienestar', 0, 2, 127),
(303, 27, 'Estudios de YacimientosMateriales', 0, 3, 128),
(304, 27, 'Estudios de YacimientosServicios y Contratos', 0, 4, 129),
(305, 27, 'Estudios de YacimientosOtros', 0, 5, 130),
(306, 28, 'Distrito CarupanoLabor', 0, 1, 131),
(307, 28, 'Distrito CarupanoBeneficio y Bienestar', 0, 2, 132),
(308, 28, 'Distrito CarupanoMateriales', 0, 3, 133),
(309, 28, 'Distrito CarupanoServicios y Contratos', 0, 4, 134),
(310, 28, 'Distrito CarupanoOtros', 0, 5, 135),
(311, 29, 'Distrito GuiriaLabor', 0, 1, 136),
(312, 29, 'Distrito GuiriaBeneficio y Bienestar', 0, 2, 137),
(313, 29, 'Distrito GuiriaMateriales', 0, 3, 138),
(314, 29, 'Distrito GuiriaServicios y Contratos', 0, 4, 139),
(315, 29, 'Distrito GuiriaOtros', 0, 5, 140),
(316, 30, 'Misión ViviendaLabor', 0, 1, 141),
(317, 30, 'Misión ViviendaBeneficio y Bienestar', 0, 2, 142),
(318, 30, 'Misión ViviendaMateriales', 0, 3, 143),
(319, 30, 'Misión ViviendaServicios y Contratos', 0, 4, 144),
(320, 30, 'Misión ViviendaOtros', 0, 5, 145),
(321, 31, 'Infraestructura y Procesos CarupanoLabor', 0, 1, 146),
(322, 31, 'Infraestructura y Procesos CarupanoBeneficio y Bienestar', 0, 2, 147),
(323, 31, 'Infraestructura y Procesos CarupanoMateriales', 0, 3, 148),
(324, 31, 'Infraestructura y Procesos CarupanoServicios y Contratos', 0, 4, 149),
(325, 31, 'Infraestructura y Procesos CarupanoOtros', 0, 5, 150),
(326, 32, 'Logistica MarinaLabor', 0, 1, 151),
(327, 32, 'Logistica MarinaBeneficio y Bienestar', 0, 2, 152),
(328, 32, 'Logistica MarinaMateriales', 0, 3, 153),
(329, 32, 'Logistica MarinaServicios y Contratos', 0, 4, 154),
(330, 32, 'Logistica MarinaOtros', 0, 5, 155),
(331, 33, 'Mantenimiento CarupanoLabor', 0, 1, 156),
(332, 33, 'Mantenimiento CarupanoBeneficio y Bienestar', 0, 2, 157),
(333, 33, 'Mantenimiento CarupanoMateriales', 0, 3, 158),
(334, 33, 'Mantenimiento CarupanoServicios y Contratos', 0, 4, 159),
(335, 33, 'Mantenimiento CarupanoOtros', 0, 5, 160),
(336, 34, 'Operaciones Producción CarupanoLabor', 0, 1, 161),
(337, 34, 'Operaciones Producción CarupanoBeneficio y Bienestar', 0, 2, 162),
(338, 34, 'Operaciones Producción CarupanoMateriales', 0, 3, 163),
(339, 34, 'Operaciones Producción CarupanoServicios y Contratos', 0, 4, 164),
(340, 34, 'Operaciones Producción CarupanoOtros', 0, 5, 165),
(341, 35, 'METOCEAN GEOFISICA Y GEODESIALabor', 0, 1, 166),
(342, 35, 'METOCEAN GEOFISICA Y GEODESIABeneficio y Bienestar', 0, 2, 167),
(343, 35, 'METOCEAN GEOFISICA Y GEODESIAMateriales', 0, 3, 168),
(344, 35, 'METOCEAN GEOFISICA Y GEODESIAServicios y Contratos', 0, 4, 169),
(345, 35, 'METOCEAN GEOFISICA Y GEODESIAOtros', 0, 5, 170),
(346, 36, 'Rafael Urdaneta Costa AfueraLabor', 0, 1, 171),
(347, 36, 'Rafael Urdaneta Costa AfueraBeneficio y Bienestar', 0, 2, 172),
(348, 36, 'Rafael Urdaneta Costa AfueraMateriales', 0, 3, 173),
(349, 36, 'Rafael Urdaneta Costa AfueraServicios y Contratos', 0, 4, 174),
(350, 36, 'Rafael Urdaneta Costa AfueraOtros', 0, 5, 175);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moneda`
--

CREATE TABLE IF NOT EXISTS `moneda` (
  `idmoneda` int(11) NOT NULL,
  `moneda` varchar(200) NOT NULL,
  `siglasm` varchar(20) NOT NULL,
  `idtasa` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `moneda`
--

INSERT INTO `moneda` (`idmoneda`, `moneda`, `siglasm`, `idtasa`) VALUES
(1, 'bolivares', 'BsF', 0);

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
  `diciembre_p` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `plan`
--

INSERT INTO `plan` (`idplan`, `enero_p`, `febrero_p`, `marzo_p`, `abril_p`, `mayo_p`, `junio_p`, `julio_p`, `agosto_p`, `septiembre_p`, `octubre_p`, `noviembre_p`, `diciembre_p`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(2, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(8, '4857.07', '9764.63', '23195.73', '30888.76', '38596.09', '48365.27', '57808.92', '67329.9', '76833.68', '88875.82', '98852.59', '142825.95'),
(9, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(10, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(11, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(12, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(14, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(16, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(17, '12408.11', '31297.11', '49148.84', '71248.5', '103836.25', '141514.42', '195806.64', '306959.87', '528718.64', '774865.73', '1052825.26', '1297579.14'),
(18, '34712.24', '93770.11', '232358.76', '443472.33', '610344.65', '801663.19', '978838.45', '1170524.36', '1329049.35', '1594428', '1781267.27', '1917348.98'),
(19, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(20, '1898.55', '4310.82', '5175.95', '7794.02', '10396.09', '12998.16', '60164.9', '191683.4', '344077.21', '484338', '732181.41', '984242.77'),
(21, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(22, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(23, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(24, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(25, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(26, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(27, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(28, '0', '0', '0', '0', '3952.5', '7905', '11857.5', '15810', '19762.5', '23715', '27667.5', '31620'),
(29, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(30, '4716', '5611.5', '7807.74', '12008.14', '20734.48', '34618', '44600', '50025', '53000', '54600', '55000', '55000'),
(31, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(32, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(33, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(34, '0', '0', '0', '0', '0', '1160', '1160', '1160', '1160', '4120', '7060', '10000'),
(35, '0', '0', '0', '0', '1300', '2600', '3900', '5200', '6500', '7800', '9100', '10400'),
(36, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(37, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(38, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(39, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(40, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(41, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(42, '16608.44', '43490.33', '66306.58', '88602.8', '116967.52', '176264.82', '255059.05', '327141.85', '409227.4', '481278.43', '547711.79', '583673.88'),
(43, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(44, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(45, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(46, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(47, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(48, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(49, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(50, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(51, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(52, '0', '0', '0', '0', '0', '0', '0', '0', '6199.2', '6199.2', '6199.2', '6199.2'),
(53, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(54, '7607.05', '16184.1', '30378.73', '42628.21', '55442.65', '70840.43', '85896.89', '97217.38', '109123.89', '120397.41', '131641.08', '142879.6'),
(55, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(56, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(57, '0', '0', '0', '0', '505', '20407.5', '38015', '38015', '39015', '41015', '47815', '51823.03'),
(58, '41144.75', '93493.86', '163360.28', '227895.14', '289484.21', '335130.45', '376654.98', '416079.93', '460114.8', '503562.03', '537610.11', '570329.58'),
(59, '152818.37', '367469.83', '481767.68', '594991.03', '711049.87', '824460.27', '924513.43', '1024894.37', '1123509.4', '1284282.01', '1363604.16', '1485871.01'),
(60, '108217.4', '217327.13', '382064.97', '509108.56', '614646.38', '691222.59', '791015.56', '888088.94', '969974.55', '1040009.81', '1107142.19', '1169513.57'),
(61, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(62, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(63, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(64, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(65, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(66, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(67, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(68, '4857.07', '9764.63', '23195.73', '30888.76', '38596.09', '48365.27', '57808.92', '67329.9', '76833.68', '88875.82', '98852.59', '142825.95'),
(69, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(70, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(71, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(72, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(73, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(74, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(75, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(76, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(77, '12408.11', '31297.11', '49148.84', '71248.5', '103836.25', '141514.42', '195806.64', '306959.87', '528718.64', '774865.73', '1052825.26', '1297579.14'),
(78, '34712.24', '93770.11', '232358.76', '443472.33', '610344.65', '801663.19', '978838.45', '1170524.36', '1329049.35', '1594428', '1781267.27', '1917348.98'),
(79, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(80, '1898.55', '4310.82', '5175.95', '7794.02', '10396.09', '12998.16', '60164.9', '191683.4', '344077.21', '484338', '732181.41', '984242.77'),
(81, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(82, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(83, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(84, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(85, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(86, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(87, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(88, '0', '0', '0', '0', '3952.5', '7905', '11857.5', '15810', '19762.5', '23715', '27667.5', '31620'),
(89, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(90, '4716', '5611.5', '7807.74', '12008.14', '20734.48', '34618', '44600', '50025', '53000', '54600', '55000', '55000'),
(91, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(92, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(93, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(94, '0', '0', '0', '0', '0', '1160', '1160', '1160', '1160', '4120', '7060', '10000'),
(95, '0', '0', '0', '0', '1300', '2600', '3900', '5200', '6500', '7800', '9100', '10400'),
(96, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(97, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(98, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(99, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(100, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(101, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(102, '16608.44', '43490.33', '66306.58', '88602.8', '116967.52', '176264.82', '255059.05', '327141.85', '409227.4', '481278.43', '547711.79', '583673.88'),
(103, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(104, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(105, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(106, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(107, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(108, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(109, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(110, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(111, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(112, '0', '0', '0', '0', '0', '0', '0', '0', '6199.2', '6199.2', '6199.2', '6199.2'),
(113, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(114, '7607.05', '16184.1', '30378.73', '42628.21', '55442.65', '70840.43', '85896.89', '97217.38', '109123.89', '120397.41', '131641.08', '142879.6'),
(115, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(116, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(117, '0', '0', '0', '0', '505', '20407.5', '38015', '38015', '39015', '41015', '47815', '51823.03'),
(118, '41144.75', '93493.86', '163360.28', '227895.14', '289484.21', '335130.45', '376654.98', '416079.93', '460114.8', '503562.03', '537610.11', '570329.58'),
(119, '152818.37', '367469.83', '481767.68', '594991.03', '711049.87', '824460.27', '924513.43', '1024894.37', '1123509.4', '1284282.01', '1363604.16', '1485871.01'),
(120, '108217.4', '217327.13', '382064.97', '509108.56', '614646.38', '691222.59', '791015.56', '888088.94', '969974.55', '1040009.81', '1107142.19', '1169513.57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE IF NOT EXISTS `proyecto` (
  `idproyecto` int(11) NOT NULL,
  `renglon` varchar(200) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `idplan` int(11) NOT NULL,
  `idreal` int(11) NOT NULL,
  `idcategoria` int(11) NOT NULL,
  `idmoneda` int(11) NOT NULL,
  `iddivision` int(11) NOT NULL,
  `iddist` int(11) NOT NULL,
  `idtipo_IO` int(11) NOT NULL,
  `iddom` int(11) NOT NULL,
  `idanho` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`idproyecto`, `renglon`, `titulo`, `idplan`, `idreal`, `idcategoria`, `idmoneda`, `iddivision`, `iddist`, `idtipo_IO`, `iddom`, `idanho`) VALUES
(1, '--2010-JODJD-20', 'FLUJO DE CAJA', 0, 0, 1, 0, 2, 2, 0, 0, 0),
(2, '--2010-091G1201', 'ESTUDIOS METOCEAN DTTO GU IRIA', 61, 176, 2, 0, 0, 0, 0, 0, 0),
(3, '--2010-091P1301', 'ESTUDIOS METOCEAN DTTO CA RUPANO', 62, 177, 2, 0, 0, 0, 0, 0, 0),
(4, '--2010-091V3101', 'ESTUDIOS METOCEAN DIV COS TA AFUERA', 63, 178, 2, 0, 0, 0, 0, 0, 0),
(5, '--2007-122P1301', 'PERFORACION-MARISCAL SUCR E-CPO DRAGON', 64, 179, 3, 0, 0, 0, 0, 0, 0),
(6, '--2008-122P1301', 'PERF LOC DPSSD4-CAMPO DRA GON', 65, 180, 3, 0, 0, 0, 0, 0, 0),
(7, '--2009-122P1301', 'POZO DR5A / LOCAL DPSSD10 DEL CAMP DRAG', 66, 181, 3, 0, 0, 0, 0, 0, 0),
(8, '--2009-122P1302', 'PERFOR. DEL POZO D6/ TALA DRO ABAN PEARL', 67, 182, 3, 0, 0, 0, 0, 0, 0),
(9, '--2010-122P1301', 'GESTION DE PERFORACION DI V COSTA AFUERA', 68, 183, 3, 0, 0, 0, 0, 0, 0),
(10, '--2010-122P1302', 'LOGISTICA OPERACIONAL - A POYO A POZOS', 69, 184, 3, 0, 0, 0, 0, 0, 0),
(11, '--2010-122P1304', 'PERF. LOC - DPSSD9/POZO D R7 CAMPO DRAGON', 70, 185, 3, 0, 0, 0, 0, 0, 0),
(12, '--2010-122P1305', 'PERF. LOC- DPSSD 5/ POZO DR9 CAMPO DRAGÓ', 71, 186, 3, 0, 0, 0, 0, 0, 0),
(13, '--2010-122P1306', 'PERF LOC. DPSSD 11/ POZO DR 8 CAMPO DRAG', 72, 187, 3, 0, 0, 0, 0, 0, 0),
(14, '--2010-122P1307', 'PERF. LOC- DPSSD 8/ POZO DR10 CAMPO DRAG', 73, 188, 3, 0, 0, 0, 0, 0, 0),
(15, '--2011-122P1301', 'POZO DR11 LOCALIZACIÓN DP SSD7', 74, 189, 3, 0, 0, 0, 0, 0, 0),
(16, '--2011-122P1302', 'PERF  CAMPO PATAO 5 / LOC . PSSDD 13', 75, 190, 3, 0, 0, 0, 0, 0, 0),
(17, '--2012-122P1401', 'PERF LOC. PPSSD9 / CAMPO PATAO', 76, 191, 3, 0, 0, 0, 0, 0, 0),
(18, '--2008-263G1201', 'GASODUCTOS SUBMARINOS ', 77, 192, 4, 0, 0, 0, 0, 0, 0),
(19, '--2008-270G1201', 'PAGMI ', 78, 193, 5, 0, 0, 0, 0, 0, 0),
(20, '--2007-289P1302', 'PLATAFORMA MARISCAL SUCRE -CPO-DRAGON', 79, 194, 6, 0, 0, 0, 0, 0, 0),
(21, '--2008-289P1301', 'SISTEMA SUBMAR MARISCAL S UCRE CAM.DRAGON', 80, 195, 6, 0, 0, 0, 0, 0, 0),
(22, '--2009-263P1601', 'GASODUCTO MEJILLONES - RI O CARIBE', 81, 196, 6, 0, 0, 0, 0, 0, 0),
(23, '--2009-289P1601', 'DESAR.INFRAEST.MEJILLONES RIO CARIBE', 82, 197, 6, 0, 0, 0, 0, 0, 0),
(24, '--2013-292G1201', 'FACILID TRANSP CRUDO PEDE RNALES-COROCORO', 83, 198, 7, 0, 0, 0, 0, 0, 0),
(25, '--2015-294G1201', 'CONTRUC E INST  MONOBOYA FSO NABARIMA', 84, 199, 7, 0, 0, 0, 0, 0, 0),
(26, '--2008-741P1302', 'INSTALACIONES MACARAPANA COSTA AFUERA', 85, 200, 8, 0, 0, 0, 0, 0, 0),
(27, '--2010-741P1301', 'DESARROLLO URBANO DTTO CA RUPANO', 86, 201, 8, 0, 0, 0, 0, 0, 0),
(28, '--2010-741V3102', 'ADECUAC DE ESPACIOS P/ OF ICINAS CUMANA', 87, 202, 8, 0, 0, 0, 0, 0, 0),
(29, '--2013-919V3101', 'ADEC GALPON TALLER MTTO M ECANICO CA', 88, 203, 8, 0, 0, 0, 0, 0, 0),
(30, '--2010-749G1201', 'ADECUAC DE ESPACIOS PARA OFICINAS GUIRIA', 89, 204, 8, 0, 0, 0, 0, 0, 0),
(31, '--2012-741V3101', 'CONSTRUCCIÓN DEL COMPLEJO PETROLERO CUMA', 90, 205, 8, 0, 0, 0, 0, 0, 0),
(32, '--2013-419V3101', 'ACONDIC ESPAC LAB SALUD Y CTRO CAPACIT', 91, 206, 8, 0, 0, 0, 0, 0, 0),
(33, '--2015-749G1201', 'ACONDIC  OFICINAS CASA GU ARAGUARITA C A', 92, 207, 8, 0, 0, 0, 0, 0, 0),
(34, '--2015-749G1202', 'ADEC E INSTALAC OFICIN Y CLINICA GUIRIA', 93, 208, 8, 0, 0, 0, 0, 0, 0),
(35, '--2016-741I1101', 'ADECUACIÓN OFIC GG COSTA AFUERA OCCIDENT', 94, 209, 8, 0, 0, 0, 0, 0, 0),
(36, '--2016-749V3101', 'ADECUACION INSTALACIONES COMEDOR CA', 95, 210, 8, 0, 0, 0, 0, 0, 0),
(37, '--2008-755P1301', 'BRIGADA DE BOMBEROS INDSU T. COSTA AFUERA', 96, 211, 9, 0, 0, 0, 0, 0, 0),
(38, '--2010-759P1301', 'SEGURIDAD INDUSTRIAL DTTO CARUPANO', 97, 212, 9, 0, 0, 0, 0, 0, 0),
(39, '--2011-760G1201', 'CENTRO DE CONTROL (CECON) PCP EDIF-OPER', 98, 213, 10, 0, 0, 0, 0, 0, 0),
(40, '--2011-760V3101', 'PROYECTOS DE SEGURIDAD 20 11(PCP) COMPLEJ', 99, 214, 10, 0, 0, 0, 0, 0, 0),
(41, '--2008-860G1201', 'EQUIPAMIENTO AIT - GDCO ', 100, 215, 11, 0, 0, 0, 0, 0, 0),
(42, '--2010-860V3101', 'AIT DIV COSTA AFUERA ', 101, 216, 11, 0, 0, 0, 0, 0, 0),
(43, '--2008-913G1201', 'CIGMA ', 102, 217, 12, 0, 0, 0, 0, 0, 0),
(44, '--2012-939P1301', 'ADQ EQUIP MEDICOS CLINICA CARUPANO', 103, 218, 13, 0, 0, 0, 0, 0, 0),
(45, '--2013-933G1201', 'ADQ EQUIP LOG MARINA (LOW BOY)', 104, 219, 13, 0, 0, 0, 0, 0, 0),
(46, '--2013-934G1208', 'MTTO MAY  V EMBARCACIONES LOG MARINA', 105, 220, 13, 0, 0, 0, 0, 0, 0),
(47, '--2013-939P1301', ' ADQ EQUIP MEDICOS CLINIC A CARUPANO', 106, 221, 13, 0, 0, 0, 0, 0, 0),
(48, '--2014-939G1201', 'ADQ EQUIP SERV MEDICOS GU IRIA', 107, 222, 13, 0, 0, 0, 0, 0, 0),
(49, '--2014-939G1202', 'ADQ EQUIP SALUD OCUPACION AL GUIRIA', 108, 223, 13, 0, 0, 0, 0, 0, 0),
(50, '--2014-939V3101', 'ADQ EQUIP MEDICOS SERV ME DICOS CUMANA', 109, 224, 13, 0, 0, 0, 0, 0, 0),
(51, '--2015-933P1301', 'ADQ AMBULANCIA TIPO III P ARA CARUPANO', 110, 225, 13, 0, 0, 0, 0, 0, 0),
(52, '--2015-933V1301', 'ADQ AMBULANCIA TIPO III P ARA CUMANA', 111, 226, 13, 0, 0, 0, 0, 0, 0),
(53, '--2015-933V3101', 'ADQUISICIÓN EQUIPOS TRANS PORTE AÉREO', 112, 227, 13, 0, 0, 0, 0, 0, 0),
(54, '--2008-984G1201', 'ELECTRIFICACION DEL CIGMA ', 113, 228, 14, 0, 0, 0, 0, 0, 0),
(55, '--2008-986G1201', 'GESTION - GDCO ', 114, 229, 14, 0, 0, 0, 0, 0, 0),
(56, '--2008-986G1203', 'LOGISTICA OPERACIONAL GDC O', 115, 230, 14, 0, 0, 0, 0, 0, 0),
(57, '--2009-985G1201', 'ADECUACION  PUERTO DE HIE RRO', 116, 231, 14, 0, 0, 0, 0, 0, 0),
(58, '--2016-983V3101', 'CONST HANGAR  MTTO Y RESG AERONAVES  CUM', 117, 232, 14, 0, 0, 0, 0, 0, 0),
(59, '--2010-HA0G1220', 'GESTION DISTRITO GURIA ', 118, 233, 15, 0, 0, 0, 0, 0, 0),
(60, '--2010-HA0P1322', 'GESTION DISTRITO CARUPANO ', 119, 234, 15, 0, 0, 0, 0, 0, 0),
(61, '--2010-HA0V3123', 'GESTION DIVISIÓN COSTA AF UERA CUMANA', 120, 235, 15, 0, 0, 0, 0, 0, 0),
(62, '--2010-JODJD-20', 'PERFORACION POZO', 0, 242, 1, 0, 1, 3, 0, 2, 0);

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
  `diciembre_r` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=243 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reales`
--

INSERT INTO `reales` (`idreal`, `enero_r`, `febrero_r`, `marzo_r`, `abril_r`, `mayo_r`, `junio_r`, `julio_r`, `agosto_r`, `septiembre_r`, `octubre_r`, `noviembre_r`, `diciembre_r`) VALUES
(1, '1951.82', '4128.95', '10506.82905', '13883.51962', '17498.902', '22308.95301', '27806.40801', '33741.78468', '42157.93321', '50490.54241', '50490.54241', '0'),
(2, '368.91', '880.84', '2319.92052', '3518.12495', '5871.32806', '8779.04979', '10804.21274', '13586.10757', '82488.81615', '86574.88105', '86574.88105', '0'),
(3, '0', '0', '2.413', '2.413', '6.213', '6.213', '332.343', '332.343', '4534.888', '6034.888', '6357.833', '0'),
(4, '246.02', '1094.53', '1605.57833', '3556.21257', '5041.45084', '6224.67477', '7383.72065', '8784.98244', '11266.40064', '16721.918', '17557.87678', '0'),
(5, '0', '0', '0', '173.4331', '173.4331', '173.4331', '0', '0', '0', '0', '0', '0'),
(6, '1552.52', '3238.2', '8305.21136', '11046.19492', '13414.61633', '16932.99333', '20562.00106', '24039.23847', '29616.62477', '35278.32936', '35278.32936', '0'),
(7, '334.23', '591.17', '1259.6394', '2138.47025', '3747.9813', '5810.55603', '7089.74471', '8890.54763', '54055.7726', '57145.73522', '57145.73522', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(9, '1250.61', '3777.75', '5196.01071', '7359.58856', '8246.25172', '10993.03984', '13450.71142', '15707.91949', '20700.95893', '25620.55558', '27227.95939', '0'),
(10, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(11, '1991.93', '3705.34', '8296.24835', '10998.36197', '13709.28673', '17069.53923', '20974.83008', '24644.1748', '30117.99313', '35766.32705', '35766.32705', '0'),
(12, '626.64', '975.62', '1814.49217', '2886.81768', '4980.27627', '7279.20577', '9067.64812', '11447.09947', '70719.6648', '74236.32371', '74236.32371', '0'),
(13, '0', '0', '40', '40', '40', '40', '44.5', '44.5', '3183.28', '3183.28', '3183.28', '0'),
(14, '1753.39', '5347.07', '7101.02894', '8837.91718', '11110.21905', '11850.18906', '13957.18487', '16077.82754', '18163.96345', '25646.4306', '25996.47392', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(16, '81.3', '81.3', '81.30401', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(17, '16.96', '16.96', '16.96241', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(18, '0', '0', '0', '0', '0', '0', '0', '0', '24', '24', '24', '0'),
(19, '489.15', '915.81', '1276.61185', '-112.42664', '1129.21632', '1929.76032', '2704.48032', '3474.02432', '4279.98707', '6075.89338', '6075.89338', '0'),
(20, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(21, '1307.77', '2697.57', '7351.84024', '9924.8089', '12501.29918', '14966.57878', '17990.03161', '21366.8891', '26401.26752', '32005.88007', '32005.88007', '0'),
(22, '199.62', '515.45', '1196.21224', '2067.80255', '3576.91205', '5160.12946', '6229.21903', '7892.39312', '48156.75223', '50854.94398', '50854.94398', '0'),
(23, '0', '0.8', '0.8', '0.8', '0.8', '0.8', '0.8', '0.8', '0.8', '0.8', '0.8', '0'),
(24, '199.39', '551.48', '554.40494', '959.29452', '1220.97919', '2243.02033', '2125.50544', '2646.62216', '2867.12098', '6948.43308', '7347.81914', '0'),
(25, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(26, '1709.78', '3938.37', '8890.79517', '3010.25993', '4826.6424', '8658.26073', '13529.93074', '18511.29147', '26058.78688', '33670.07989', '33670.07989', '0'),
(27, '403.36', '922', '1718.78471', '943.00941', '2629.41272', '4836.45422', '6457.53466', '8853.06723', '63693.34587', '67287.93303', '67287.93303', '0'),
(28, '0', '-135', '463.2', '0', '0', '55', '650', '1600', '1600', '1600', '1600', '0'),
(29, '2965.38', '6943.39', '10806.68474', '-1701.64801', '1624.60434', '5867.9212', '7957.56782', '10297.05693', '10411.02508', '13420.70465', '13420.70465', '0'),
(30, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(31, '6562.7', '12804.27', '26252.65144', '30931.67169', '36759.18029', '45435.69174', '58434.73818', '68806.32181', '83652.60192', '90308.83751', '92810.96968', '0'),
(32, '1784.61', '2881.03', '4399.48066', '7484.32726', '13844.42381', '17186.3867', '22679.75018', '28383.54728', '289982.82689', '296578.83354', '297038.15821', '0'),
(33, '0', '2015.88', '2015.88488', '2015.88488', '2080.70888', '3010.24638', '8430.98638', '11782.17606', '16029.68606', '18977.98606', '20227.78606', '0'),
(34, '4182.67', '15275.11', '22850.06706', '34061.25937', '53203.81102', '68742.73655', '84676.5287', '117727.45727', '159402.60947', '237479.87569', '252698.62006', '0'),
(35, '92.98', '12882.23', '15147.01045', '24860.12262', '38536.09859', '56977.99532', '119594.5916', '134382.86203', '167396.40524', '195248.73333', '195248.73333', '0'),
(36, '1502.59', '2880.69', '9091.74783', '10972.23464', '14140.01322', '17989.68002', '21450.11503', '26457.39868', '29655.86751', '25949.64594', '25949.64594', '0'),
(37, '243.16', '480.74', '1470.13451', '2222.68203', '4609.36997', '7021.97141', '8356.36309', '11057.16373', '103089.35027', '101782.13693', '101782.13693', '0'),
(38, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '713.664', '0'),
(39, '205.57', '651.36', '2364.74789', '4715.64784', '5178.32146', '9449.02608', '12161.80778', '12666.58896', '13333.90573', '20047.84861', '21011.2935', '0'),
(40, '0', '0', '0', '0', '0', '0', '0', '0', '0', '270.4', '270.4', '0'),
(41, '2513.37', '5045.31', '12196.19784', '16359.51685', '20372.60356', '25686.5957', '31865.34934', '38006.48937', '46904.824', '56517.27068', '56517.27068', '0'),
(42, '580.95', '1180.28', '2306.09484', '3675.40736', '6594.79772', '10219.3082', '12514.01844', '15806.2687', '96359.70219', '101536.22931', '101536.22931', '0'),
(43, '0.43', '8.39', '9.59', '9.59', '12.3', '12.3', '12.3', '15.9', '99.2', '887.92', '895.3', '0'),
(44, '363.9', '713.94', '911.84959', '1918.50731', '2183.54972', '3238.80068', '3508.51939', '4919.37962', '8223.82557', '12745.65359', '14499.30297', '0'),
(45, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(46, '245.31', '502.96', '1831.26103', '2821.51877', '3556.48158', '5148.92479', '4659.12745', '5505.85957', '5913.31743', '7371.20238', '7371.20238', '0'),
(47, '33.97', '72.67', '384.96', '769.4351', '1338.67277', '2123.76958', '1980.27628', '2516.88571', '13488.34536', '14017.71933', '14017.71933', '0'),
(48, '0', '0', '0', '0', '0', '0', '0.39999999999998', '0.39999999999998', '0.60000000000002', '0.80000000000007', '0.80000000000007', '0'),
(49, '4446.13', '6469.57', '107.89652', '340.49837', '1294.53974', '3280.43481', '4558.09303', '5524.63016', '5408.3004', '6493.47764', '7002.39764', '0'),
(50, '50.88', '248.38', '507.46501', '1052.15489', '1954.80287', '2774.58358', '7663.68114', '6822.88605', '7409.43161', '234.3', '234.3', '0'),
(51, '1628.72', '3229.5', '8063.36882', '10515.32831', '13156.69252', '16977.5572', '21185.89833', '25299.91498', '31560.15303', '37251.58137', '37251.58137', '0'),
(52, '1103.23', '1811.52', '2524.03272', '3613.45426', '5387.84311', '7735.62337', '9241.42803', '11434.78664', '66019.48104', '69308.14503', '69364.77703', '0'),
(53, '0', '0', '0', '0', '0', '0', '0', '0', '1324.66', '1324.66', '1324.66', '0'),
(54, '134.97', '432.93', '513.07778', '948.14459', '1135.83563', '1680.18451', '1891.63147', '2597.54115', '3506.9572', '10009.58356', '10346.23767', '0'),
(55, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(56, '2536.88', '5114.71', '12667.23664', '17003.50994', '21591.44498', '27619.03864', '34517.5252', '41234.88989', '51315.61249', '62537.05452', '62537.05452', '0'),
(57, '431.65', '1086.55', '2118.33583', '3508.22159', '6166.91283', '9577.55383', '12006.20839', '15458.15457', '96168.29925', '101438.84228', '101516.40228', '0'),
(58, '0.35', '0.35', '1.39478', '4.93478', '4.93478', '164.23478', '164.95978', '293.85978', '752.13478', '1941.13478', '1941.13478', '0'),
(59, '573.71', '1560.02', '1802.63849', '3526.95015', '6223.66224', '7917.24493', '14898.81679', '21095.32853', '25884.40438', '37265.79132', '41315.1051', '0'),
(60, '623.96', '6882.78', '9564.77488', '15419.05064', '18201.49319', '22499.17527', '24604.111', '28149.6532', '36182.76653', '46281.21191', '46281.21191', '0'),
(61, '14084.89', '29686.85', '47896.40152', '59601.36436', '74507.49072', '74805.94332', '112674.72071', '112976.77925', '113415.12335', '113853.46745', '113853.46745', '0'),
(62, '6920.24', '11659.91', '15167.65799', '20116.219', '32373.80349', '32510.85248', '48523.39568', '48656.02767', '49863.82306', '54867.20244', '55578.07244', '0'),
(63, '-0.39', '-0.49', '-0.492', '-0.492', '-0.518', '-0.518', '-0.561', '4539.439', '4539.439', '6856.949', '7065.749', '0'),
(64, '9259.48', '19170.9', '28477.80736', '56233.85099', '80205.28137', '98270.47908', '119337.71362', '143518.08583', '177768.79443', '244393.67751', '254218.31708', '0'),
(65, '43.78', '2498.26', '2551.61912', '3007.78992', '3049.06198', '3084.24673', '3092.97111', '3135.93187', '3185.74309', '3248.90269', '3248.90269', '0'),
(66, '500.07', '960.59', '2275.34357', '3496.73933', '4543.00804', '5532.34539', '6501.28564', '7791.43449', '10316.28385', '11998.39896', '11998.39896', '0'),
(67, '59.92', '203.96', '361.91772', '779.51886', '1473.22853', '2110.6325', '2563.25364', '3233.56316', '22189.50194', '23117.96017', '23117.96017', '0'),
(68, '0', '0', '0', '0', '0', '0', '1.1', '1.1', '1.1', '1.1', '1.1', '0'),
(69, '966.51', '1221.28', '1421.9012', '5585.55746', '9824.19541', '12810.49111', '13647.85391', '14660.00475', '19154.04591', '22029.75804', '22516.85804', '0'),
(70, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(71, '6801.05', '13049.84', '30576.31726', '39771.48933', '48971.55029', '63254.17261', '77872.56695', '93476.93213', '115667.96163', '139670.93741', '139670.93741', '0'),
(72, '1638.26', '3357.43', '5807.84663', '9192.65459', '15809.97076', '24494.75738', '30472.25019', '39405.11102', '256402.19618', '268486.19094', '268489.37694', '0'),
(73, '1.92', '553.89', '556.8698', '557.8454', '1194.838', '2048.89479', '1073.1316', '1084.08439', '10005.22118', '5454.32118', '5455.09797', '0'),
(74, '1034.42', '3445.84', '5468.44046', '9198.83661', '11187.69449', '13488.14427', '18481.51041', '22473.1444', '30690.94128', '51641.44433', '56622.766', '0'),
(75, '822.96', '4685.06', '3593.72998', '6309.99631', '4308.9276', '5692.44683', '13362.35218', '403104.07048', '878109.04582', '980248.83588', '980248.83588', '0'),
(76, '982.67', '1965.64', '4773.57345', '6400.6945', '8052.75139', '10382.19636', '13436.0629', '15720.23428', '19510.22578', '23213.58647', '0', '0'),
(77, '223.85', '397.32', '865.96474', '1548.29214', '2582.43837', '3944.53806', '5170.09671', '6373.96378', '37243.45467', '39088.8826', '23213.58647', '0'),
(78, '0', '3', '4.49876', '4.49876', '7.09796', '7.09796', '108.03848', '108.03848', '109.36848', '1395.36848', '39114.9716', '0'),
(79, '1211.4', '3846.47', '5287.95453', '8033.08526', '10805.79267', '14421.97352', '16362.44403', '18837.49962', '21685.69817', '35922.61732', '1395.36848', '0'),
(80, '1438.72', '5696.9', '9903.49055', '13834.0625', '18198.15168', '20978.26042', '27250.01305', '30576.78693', '37351.81025', '45928.51521', '36663.45607', '0'),
(81, '4001.43', '7909.98', '17473.96733', '23529.15224', '29605.15052', '36194.42907', '42286.7278', '51055.40913', '62936.69216', '76260.60832', '76260.60832', '0'),
(82, '12868.69', '25282.42', '38767.78198', '48076.62417', '52888.09153', '65149.65322', '87106.73801', '99789.40064', '235503.09732', '245805.03202', '246227.37203', '0'),
(83, '-34.56', '2081.7', '2399.74249', '3294.01608', '3293.92008', '3387.56117', '7782.26512', '32132.45462', '36716.55782', '40483.08282', '40485.75281', '0'),
(84, '1067.18', '6346.76', '10565.18883', '15629.412', '21763.14483', '32571.09268', '51867.75804', '60557.57838', '72339.87945', '82300.01785', '86638.01601', '0'),
(85, '0', '0', '0', '0', '0', '0', '691.19953', '1500.85953', '1500.85953', '8980.54078', '8980.54078', '0'),
(86, '5659.95', '12516.62', '23297.63023', '30272.30825', '37581.47352', '45726.8352', '55792.49356', '66689.91269', '80446.98379', '95484.57183', '95484.57183', '0'),
(87, '2156.84', '4103.03', '6691.57547', '9406.98455', '15635.60157', '21484.21145', '26863.12296', '33418.8109', '166443.30301', '174534.86291', '175635.86291', '0'),
(88, '-0.07', '-0.07', '-16352.626', '-1852.683', '-1852.707', '246.793', '246.793', '1046.793', '5549.849', '5549.849', '26150.975', '0'),
(89, '3090.28', '6927.37', '10774.00736', '19467.62541', '24175.66684', '30536.0787', '40490.13236', '50843.29498', '61673.34875', '88676.94632', '96490.17635', '0'),
(90, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(91, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(92, '0', '0', '0', '0', '0', '0', '0', '0', '2266.14528', '2266.14528', '2266.14528', '0'),
(93, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(94, '0', '0', '0', '0', '0', '2.147', '2.147', '2.147', '2.147', '5.46194', '5.46194', '0'),
(95, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(96, '15464.53', '23049.43', '41210.78793', '53364.88935', '67500.05755', '83429.71096', '103508.05974', '123874.44162', '149575.55922', '179993.78969', '179993.78969', '0'),
(97, '7873.12', '10339.47', '15378.00537', '20944.85216', '36101.30804', '48206.58021', '62520.08674', '80158.6711', '479150.29967', '494895.21268', '495041.05268', '0'),
(98, '-0.05', '671.29', '2318.44179', '17321.8432', '24877.8902', '59931.1519', '82314.99999', '142811.81927', '215492.571', '342623.72233', '535967.98733', '0'),
(99, '33841.91', '62297.79', '65642.71718', '92026.68149', '142533.82353', '363299.33354', '469785.22531', '601867.42945', '730420.11116', '991513.18387', '1403221.12005', '0'),
(100, '2701.95', '43657.58', '74250.54084', '87767.67184', '135595.40224', '245526.91988', '265655.97088', '346198.02093', '429261.04893', '346049.08218', '346049.08218', '0'),
(101, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(102, '0', '0', '0', '31', '88', '139.77', '177.77', '454.454', '2785.59928', '2983.28428', '2983.28428', '0'),
(103, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(104, '250', '1624.94', '3280.79153', '7350.42153', '10365.25888', '13178.91242', '16615.61042', '18433.01967', '193516.2356', '196378.77883', '196574.19341', '0'),
(105, '0', '0', '0', '1128.35835', '1128.35835', '1128.35835', '1128.35835', '1128.35835', '3106.0599', '3106.0599', '3106.0599', '0'),
(106, '989.03', '1976.34', '4620.1299', '5870.42078', '5907.97061', '8012.42629', '12266.12965', '14483.2879', '18013.35662', '22090.81484', '22090.81484', '0'),
(107, '149.7', '262.87', '426.70659', '814.79661', '1497.42194', '2954.78199', '4629.22273', '5847.87952', '38895.76704', '41050.00129', '41050.00129', '0'),
(108, '0', '0', '45.66875', '45.66875', '45.66875', '852.66875', '10739.66875', '6558.12256', '6558.12256', '6558.12256', '6558.12256', '0'),
(109, '1225.33', '2618.73', '3859.9153', '6235.38754', '7838.5536', '28351.2467', '14767.12404', '17934.35838', '23900.76422', '36168.63797', '37875.64167', '0'),
(110, '242.96', '1032.84', '4175.92044', '7355.45335', '8544.50144', '9199.86133', '12256.30098', '15069.10496', '43482.33032', '49212.24017', '49212.24017', '0'),
(111, '3031.66', '5913.81', '10735.00893', '13925.34685', '17575.52754', '20839.79548', '25765.86883', '31157.17343', '37420.86792', '44458.46206', '44458.46206', '0'),
(112, '1533.94', '2151.55', '3398.6862', '4527.14895', '7244.51113', '9526.30581', '12354.90037', '15739.44674', '84899.50354', '88830.60393', '88830.60393', '0'),
(113, '-748.63', '-748.65', '635.506', '2009.406', '2817.8', '4360.18266', '7194.15166', '20005.9517', '41189.45402', '70594.56974', '83694.44274', '0'),
(114, '1439.51', '3697.84', '4958.56995', '20777.27238', '22860.45166', '30657.83957', '41676.73117', '76247.17219', '90001.83608', '117201.71104', '122800.04697', '0'),
(115, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(116, '1391.04', '2786.02', '7054.89939', '9386.17812', '11768.31086', '15491.04064', '18775.96308', '22209.11474', '26828.0743', '32232.38029', '32232.38029', '0'),
(117, '265.56', '704.08', '1329.66759', '2270.3113', '3838.84429', '5827.83215', '7413.1636', '9300.09324', '49659.70532', '53516.69142', '54290.05542', '0'),
(118, '11.8', '14.75', '23.6', '26.55', '29.5', '29.5', '38.35', '38.35', '1732.299', '1735.249', '1735.249', '0'),
(119, '387.93', '2086.17', '2585.18107', '2695.70368', '4557.03025', '5709.40067', '5703.20744', '6665.17869', '7606.59954', '9562.61192', '10097.59192', '0'),
(120, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(121, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(122, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(123, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(124, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(125, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(126, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(127, '0', '0', '0', '10.49757', '31.68757', '38.389', '44.83348', '52.31297', '58.6057', '66.59005', '66.59005', '0'),
(128, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(129, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(130, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(131, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(132, '0', '0', '103.046', '534.29616', '921.04882', '1605.73354', '2627.97444', '2627.97444', '5934.61007', '7187.97096', '7626.97596', '0'),
(133, '5647.8', '5647.8', '5647.79673', '5647.79673', '5647.79673', '5647.79673', '5647.79673', '8206.58765', '10584.33577', '17497.06465', '20366.51265', '0'),
(134, '11113.19', '172495.86', '208096.88264', '117697.84669', '-49274.93797', '-21555.995', '214395.85818', '297680.5353', '396049.63325', '476867.62228', '519045.52531', '0'),
(135, '1267.76', '2497.79', '6428.52758', '8892.95087', '9912.26776', '13960.54191', '17713.07085', '51138.18529', '57009.18153', '72043.11933', '72043.11933', '0'),
(136, '115.89', '231.78', '576.40695', '576.40695', '576.40695', '956.52439', '1563.64534', '1792.74876', '1792.74876', '-401.40913', '51.1209', '0'),
(137, '59.59', '86.38', '149.50162', '130.50162', '130.50162', '299.99764', '385.69097', '440.04046', '472.11646', '-650.04348', '-593.3227', '0'),
(138, '-482.4', '514.19', '3290.05237', '4085.70729', '4959.06196', '6911.16196', '6911.16196', '12202.8909', '24766.6109', '47509.39136', '48567.39136', '0'),
(139, '1076.3', '7731.02', '15746.79058', '43141.95458', '84962.31601', '106260.31443', '120413.64829', '165747.86148', '212129.75628', '272604.23962', '282120.29402', '0'),
(140, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(141, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(142, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(143, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(144, '0', '0', '0', '19.02', '19.02', '699.02', '896.25805', '896.25805', '2556.07453', '2556.07453', '2556.07453', '0'),
(145, '0', '0', '0', '0', '23.196', '23.196', '0', '0', '0', '0', '0', '0'),
(146, '377.19', '789.15', '1808.94925', '2466.72582', '3005.05681', '3742.83233', '4774.5566', '5484.87983', '6676.43554', '8225.85536', '8225.85536', '0'),
(147, '57.94', '208.61', '335.63032', '524.31024', '832.88513', '1399.77313', '1749.62338', '2254.49488', '12017.27343', '12971.98778', '12971.98778', '0'),
(148, '0', '0', '0', '0', '0', '0', '770', '1758.45', '1758.45', '3728.8', '3728.8', '0'),
(149, '0', '239.43', '401.49319', '401.49319', '408.37819', '479.82739', '564.28932', '944.13581', '1401.62881', '1945.35947', '1945.35947', '0'),
(150, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(151, '151228.72', '358048.86', '359479.9303', '724643.55593', '720176.49615', '581945.65272', '733269.07692', '903187.86987', '903793.8606', '1282453.87224', '1282779.16121', '0'),
(152, '59244.71', '103921.71', '104347.61231', '213150.51559', '214161.62961', '208047.94301', '273447.92127', '347563.39656', '2050049.49205', '2184798.57051', '2184880.40764', '0'),
(153, '3664.15', '3662.78', '6747.19003', '11026.0283', '12535.58368', '7330.48657', '7330.45657', '8027.14037', '8027.09237', '8026.55417', '8026.55417', '0'),
(154, '36654.09', '71732.72', '63828.07373', '141972.62463', '209344.88878', '355108.83514', '504304.52115', '611127.91506', '706543.5563', '533249.65167', '545336.38258', '0'),
(155, '0', '0', '0', '25837.46687', '146890.69451', '673485.56762', '834053.2022', '1116877.49873', '1186798.50617', '1735992.63128', '1735992.63128', '0'),
(156, '400.80205', '787.86195', '1971.22289', '2581.45457', '3221.26701', '3993.93215', '4927.31269', '6056.45171', '8428.45105', '10820.7465', '10820.7465', '0'),
(157, '88.28382', '142.13356', '294.7048', '510.47945', '1469.88486', '2177.23467', '2690.36711', '3465.77816', '20332.63952', '21785.60407', '21804.89107', '0'),
(158, '0', '0', '0', '0', '0', '0', '12750', '16570.05', '16570.05', '18100.05', '18100.05', '0'),
(159, '56.3984', '-10484.65327', '740.09156', '963.86291', '1420.4409', '2051.16047', '2889.60968', '4400.24491', '4889.6117', '6128.66677', '6595.31037', '0'),
(160, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(161, '3011.5', '7528.1', '13823.32648', '18136.6793', '22606.08712', '27916.26907', '34252.68185', '41498.19452', '50967.33321', '62525.47078', '62525.47078', '0'),
(162, '1073.47', '2086.47', '3292.72096', '4723.96657', '7523.42429', '10896.14049', '13504.15654', '17282.13745', '97867.83074', '103279.49897', '103279.49897', '0'),
(163, '5.9', '5.9', '5.9', '11.8', '1474.743', '1474.743', '7240.643', '46677.013', '56279.963', '56279.963', '56279.963', '0'),
(164, '292.23', '1581.79', '2114.00966', '3420.09881', '4076.43577', '6612.57437', '8908.3785', '11710.07999', '14709.59841', '17530.52424', '18901.27345', '0'),
(165, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(166, '1960.43907', '4107.24257', '10241.82256', '13447.26131', '16956.93665', '21599.33444', '26790.87111', '31708.16822', '39830.94267', '47949.847', '48229.58143', '0'),
(167, '376.14025', '1064.61908', '2038.89601', '3123.18455', '5368.70877', '8128.6425', '10514.29398', '13137.29847', '72874.78922', '77302.04475', '77352.24863', '0'),
(168, '0', '0', '0', '0', '0', '0', '0', '1.904', '1.904', '155.704', '2654.653', '0'),
(169, '1757.76964', '5360.77823', '8315.21636', '9538.2844', '14814.10279', '18437.60465', '26450.37747', '33698.1272', '42509.11859', '51273.72187', '54470.85806', '0'),
(170, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(171, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(172, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(173, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(174, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(175, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(176, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(177, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(178, '0', '0', '0', '0', '0', '53.68', '0', '0', '0', '82.87', '82.87', '0'),
(179, '14543.8', '17755.1', '16967.96', '3474.89', '68361.62', '2146.55', '2146.55', '2187.04', '2178.3', '-5613788.4', '-5533138.86', '0'),
(180, '0', '0', '0', '0', '0', '0', '0', '0', '-0.25', '-0.25', '-0.25', '0'),
(181, '0', '0', '0', '53', '53', '53', '53', '53', '53', '53', '53', '0'),
(182, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(183, '4118', '9100.96', '95939.15', '104576.69', '114537.4', '130787.13', '143754.2', '223779.83', '246143.96', '274267', '274267', '0'),
(184, '0', '-20.64', '-20.64', '-20.64', '-48.74', '-48.74', '0', '0', '0', '0', '0', '0'),
(185, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(186, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(187, '0', '0', '0', '3.08', '-327.06', '-271.26', '696.88', '3275.49', '3275.49', '3275.49', '3275.49', '0'),
(188, '0', '87637.67', '185012.85', '360931.32', '360931.32', '360931.32', '360931.32', '360931.32', '360931.32', '360931.32', '360931.32', '0'),
(189, '0', '0', '0', '33.45', '40.04', '107.89', '107.89', '107.89', '107.89', '107.89', '107.89', '0'),
(190, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(191, '0', '0', '0', '14.15', '14.15', '14.15', '14.15', '14.15', '14.15', '14.15', '14.15', '0'),
(192, '10872.2', '28511.92', '-18596.26', '34913.07', '77784.98', '109661.12', '156168.36', '221793.28', '1117680.2', '1176036.54', '1224717.38', '0'),
(193, '103341.28', '186514.82', '129120.37', '306186.05', '458355.88', '528901.79', '753568.43', '951040.94', '2145089.89', '2769215.53', '2787032.6', '0'),
(194, '14078.06', '26709.54', '64503.85', '88946.14', '116981.71', '187268.96', '208544.54', '261161.96', '338009.7', '415878', '415878', '0'),
(195, '108904.88', '101790.15', '-27334.93', '-16887.82', '-10790.97', '-8655.02', '-106481.26', '54457.27', '1248872.86', '1505443.04', '1523991.72', '0'),
(196, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '39.92', '0'),
(197, '345.3', '4443.63', '6235.24', '7260.85', '9164.23', '16326.43', '21318.29', '25410.56', '33500.52', '39588.44', '40828.26', '0'),
(198, '0', '0', '0', '15.53', '15.53', '15.53', '15.53', '15.53', '15.53', '15.53', '15.53', '0'),
(199, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(200, '284.01', '954.96', '-11019.31', '-11019.31', '-9588.99', '-8026.97', '-7089.55', '5096.73', '5835.37', '6151.17', '8326.78', '0'),
(201, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(202, '0', '1014.76', '1014.76', '1014.76', '1014.76', '1014.76', '1014.76', '1014.76', '1014.76', '1014.76', '1014.76', '0'),
(203, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(204, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(205, '4049.13', '4933.02', '7124.66', '7703.86', '9311.53', '17309.5', '17284.84', '17758.88', '21189.88', '28082.73', '28136.02', '0'),
(206, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(207, '218', '1205.2', '1205.2', '2676.38', '2676.38', '3294.08', '5735.18', '24532.55', '39404.22', '73790.42', '78928.77', '0'),
(208, '9.7', '9.7', '9.7', '9.7', '9.7', '9.7', '9.7', '9.7', '9.7', '9.7', '9.7', '0'),
(209, '0', '0', '0', '0', '0', '1155.19', '1155.19', '1155.19', '1155.19', '1155.19', '1155.19', '0'),
(210, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(211, '0', '0', '-73412.05', '-73412.05', '-73412.05', '-73412.05', '-73412.05', '-73412.05', '-73412.05', '-73412.05', '-73412.05', '0'),
(212, '0', '0', '0', '0', '0', '0', '0', '0', '17.63', '17.63', '17.63', '0'),
(213, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(214, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(215, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(216, '3679.72', '18779.41', '22766.5', '30798.96', '41781.72', '10321.33', '78317.46', '44763.15', '25935.52', '32437.53', '33851.53', '0'),
(217, '19148.52', '50078.17', '75145.2', '133840.45', '157174.96', '185212.39', '213566.71', '302387.8', '838179.82', '917278.69', '944137.98', '0'),
(218, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(219, '0', '0', '0', '0', '-198.85', '-198.85', '0', '0', '0', '0', '0', '0'),
(220, '20977.14', '24591.7', '27047.72', '67650.7', '82028.07', '82028.07', '164012.24', '246439.51', '248747.15', '279294.58', '279294.58', '0'),
(221, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(222, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(223, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(224, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(225, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(226, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(227, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(228, '30.03', '827.73', '1451.26', '2800.47', '2822.43', '2982.88', '3672.15', '3843.66', '22250.39', '23924.89', '24100.6', '0'),
(229, '7457.08', '13513.89', '25305.62', '40587.95', '59854', '73165.02', '94642.05', '112764.72', '384704.56', '428401.16', '442858.84', '0'),
(230, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(231, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(232, '0', '0', '0', '0', '4125.09', '4389.42', '8766.38', '16237.46', '36710.73', '39905.59', '53105.59', '0'),
(233, '186553.61', '383510', '415304.2', '890590.66', '1057230.79', '1524514.84', '2039888.5', '2563051.18', '2954885.14', '3581308.14', '3655392.48', '0'),
(234, '155817.14', '498278.71', '633167.93', '783490.74', '824042.76', '1162496.69', '1692914.65', '2234132.54', '4455660.92', '5232566.2', '5299529.03', '0'),
(235, '128819.4', '314325.79', '493799.29', '708789.2', '974701.85', '1466107.95', '1857501.27', '2757824.2', '5718785.57', '6530846.73', '7170831.6', '0'),
(236, '11', '11', '11', '11', '11', '11', '1', '11', '11', '11', '11', '11'),
(237, '11', '11', '11', '11', '11', '11', '1', '11', '11', '11', '11', '11'),
(238, '11', '11', '11', '11', '11', '11', '1', '11', '11', '11', '11', '11'),
(239, '11', '11', '11', '11', '11', '11', '1', '11', '11', '11', '11', '11'),
(240, '11', '11', '11', '11', '11', '11', '1', '11', '11', '11', '11', '11'),
(241, '11', '11', '11', '11', '11', '11', '1', '11', '11', '11', '11', '11'),
(242, '11', '11', '11', '11', '11', '11', '1', '11', '11', '11', '11', '11');

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
-- Estructura de tabla para la tabla `tipoio`
--

CREATE TABLE IF NOT EXISTS `tipoio` (
  `idtipoIO` int(11) NOT NULL,
  `IO_descrip` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Indices de la tabla `habilitadora`
--
ALTER TABLE `habilitadora`
  ADD PRIMARY KEY (`idhab`);

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
-- Indices de la tabla `tipoio`
--
ALTER TABLE `tipoio`
  ADD PRIMARY KEY (`idtipoIO`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `distrito`
--
ALTER TABLE `distrito`
  MODIFY `iddistrito` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `division`
--
ALTER TABLE `division`
  MODIFY `iddi` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
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
  MODIFY `idgere` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT de la tabla `gereproyecto`
--
ALTER TABLE `gereproyecto`
  MODIFY `idgp` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `habilitadora`
--
ALTER TABLE `habilitadora`
  MODIFY `idhab` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=351;
--
-- AUTO_INCREMENT de la tabla `moneda`
--
ALTER TABLE `moneda`
  MODIFY `idmoneda` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `plan`
--
ALTER TABLE `plan`
  MODIFY `idplan` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=121;
--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `idproyecto` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT de la tabla `reales`
--
ALTER TABLE `reales`
  MODIFY `idreal` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=243;
--
-- AUTO_INCREMENT de la tabla `tasa`
--
ALTER TABLE `tasa`
  MODIFY `idtasa` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tipoio`
--
ALTER TABLE `tipoio`
  MODIFY `idtipoIO` int(11) NOT NULL AUTO_INCREMENT;
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
