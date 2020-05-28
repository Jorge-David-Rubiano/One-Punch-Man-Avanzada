-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-05-2020 a las 00:35:07
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8



SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `opm_avanzada`
--
CREATE DATABASE opm_avanzada;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `heroes`
--

CREATE TABLE `heroes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(16) NOT NULL,
  `clase` varchar(3) NOT NULL,
  `rango` int(4) NOT NULL,
  `habilidad` varchar(100) NOT NULL,
  `lugarResidencia` varchar(50) NOT NULL,
  `telefono` int(15) NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `heroes`
--

INSERT INTO `heroes` (`id`, `nombre`, `clase`, `rango`, `habilidad`, `lugarResidencia`, `telefono`) VALUES
(1, 'Blast', 'S', 1, 'Desconocida', '?', 0),
(2, 'Tatsumaki', 'S', 2, 'Telequinesis', '?', 2147483647),
(3, 'Silver Fang', 'S', 3, 'Súperfuerza, Súpervelocidad, Súperagilidad', '?', 2147483647),
(4, 'Atomic Samurai', 'S', 4, 'Gran habilidad con la espada', '?', 2147483647),
(5, 'Child Emperor', 'S', 5, 'Súperinteligencia', 'CIUDAD Y', 2147483647),
(6, 'Metal Knight', 'S', 6, 'Manejo de todo tipo de robots', '?', 2147483647),
(7, 'King', 'S', 7, 'Super Fuerza', '?', 2147483647),
(8, 'Zombieman', 'S', 8, 'súper regeneración', '?', 2147483647),
(9, 'Drive Knight', 'S', 9, 'Supervelocidad, poder de fuego', '?', 2147483647),
(10, 'Pig God', 'S', 10, 'Comer lo que sea', '?', 2147483647),
(11, 'Superalloy Darks', 'S', 11, 'Habilidades Súper Humanas', 'Ciudad A', 535435346),
(12, 'Watchdog Man', 'S', 12, 'Atributos caninos', 'Ciudad Q', 434234324),
(13, 'Flashy Flash', 'S', 13, 'Velocidad y Agilidad Súperhumanos', '?', 52532523),
(14, 'Genos', 'S', 14, 'Modificaciones Cyborg', 'Ciudad Z', 43432523),
(15, 'Metal Bat', 'S', 15, 'Movimientos Asesinos con el bate metalico', '?', 42532523),
(16, 'Tanktop Master', 'S', 16, 'Velocidad sobrehumana\r\nFuerza sobrehumana', '?', 52523622),
(17, 'Prisionero Lindo', 'S', 17, 'Fuerza super Humana', '?', 54543463),
(18, 'Amai Mask', 'A', 1, 'Fuerza inmensa', 'Ciudad R', 52235326),
(19, 'Iaian', 'A', 2, '?', '?', 8765412),
(20, 'Okamaitachi', 'A', 3, 'Espadachín', '?', 43252361),
(21, 'Bushidrill', 'A', 4, 'Espadachín\r\n', '?', 2352326),
(22, 'Heavy Tank Fundo', 'A', 5, 'Habilidades Súper humanas', '?', 43234730),
(23, 'Blue Fire', 'A', 6, 'Kung fu', '?', 4234256),
(24, 'Magic Trick Man', 'A', 7, 'Trucos de Magia', '?', 4325226),
(25, 'Death Gatling', 'A', 8, 'Rapidez Sobrehumana', 'Ciudad I', 42353223),
(26, 'Tanktop Vegetari', 'A', 9, 'Fuerza Sobre Humana', '?', 4349832),
(27, 'Stinger', 'A', 10, 'Experto Combatiente con lanza', 'Ciudad J', 421412),
(28, 'Fubuki', 'B', 1, 'Psicoquinesis', 'Ciudad Z', 4323552),
(29, 'Pestañas', 'B', 2, '?', 'Ciudad Z', 3213141),
(30, 'Mono de Montaña', 'B', 3, 'Fuerza Sobre Humana', 'Ciudad Z', 4234323),
(31, 'Wild Horn', 'B', 6, 'Pile Bison', '?', 432523),
(32, 'Saitama', 'B', 7, 'Fuerza Sobrehumana\r\nVelocidad Increíble\r\nGran Agilidad\r\nIncreíble Resistencia\r\nSentido de Percepción', 'Ciudad Z', 32423532),
(33, 'Gafas', 'B', 20, 'Velocidad ', 'Ciudad Z', 3141511),
(34, 'Avispón Rosa', 'B', 25, 'Gimnasia Rítmica Olímpica', 'Ciudad Z', 3425233),
(35, 'Smell Master', 'B', 39, 'Química', '?', 4236264),
(36, 'Reclusamurai', 'B', 39, 'Sentidos Mejorados', '?', 443723),
(37, 'Gun Gun', 'B', 43, 'Tirador Experto', '?', 4643634),
(38, 'Satoru', 'C', 1, 'Ciclista', 'Ciudad Z', 4626724),
(39, 'Strange Binding ', 'C', 3, 'Atadura de Cuerda', '?', 2394832),
(40, 'Tanktop Tiger', 'C', 13, 'Fuerza Sobre Humana', 'Ciudad Z', 3483290),
(41, 'D-Pad', 'C', 22, '?', '?', 4283223),
(42, 'Tirantes Fúnebre', 'C', 40, 'Destreza\r\nAgilidad', '?', 4283503),
(43, 'Luchador de Comi', 'C', 66, 'Comida', '?', 5734852),
(44, 'Hombre Batería', 'C', 85, 'Golpes Electrificados', '?', 4738223),
(45, 'Red Muffler', 'C', 80, '?', '?', 4327847),
(46, 'Recepcionista Bl', 'C', 111, '?', '?', 4340242),
(47, 'Gearsper', 'C', 133, 'Psicoquinesia', '?', 2849023);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `heroe_monstruo`
--

CREATE TABLE `heroe_monstruo` (
  `id` int(10) NOT NULL,
  `id_heroe` int(11) NOT NULL,
  `id_monstruo` int(11) NOT NULL,
  `resultado` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `heroe_monstruo`
--

INSERT INTO `heroe_monstruo` (`id`, `id_heroe`, `id_monstruo`, `resultado`) VALUES
(1, 1, 6, 'Desconocido'),
(2, 2, 2, 'Inconcluso'),
(3, 3, 4, 'Inconcluso'),
(4, 4, 3, 'Inconcluso'),
(5, 5, 5, 'Inconcluso'),
(6, 8, 7, 'Inconcluso'),
(7, 9, 9, 'Victoria'),
(8, 10, 8, 'Inconcluso'),
(9, 3, 0, 'Derrota'),
(10, 4, 10, 'Victoria'),
(11, 4, 11, 'Victoria'),
(12, 5, 12, 'Victoria'),
(13, 6, 6, 'Huida del monstruo'),
(14, 6, 13, 'Victoria'),
(15, 5, 14, 'Victoria'),
(16, 10, 14, 'Victoria'),
(17, 3, 6, 'Batalla interrumpida'),
(18, 3, 15, 'Victoria'),
(19, 2, 1, 'Inconcluso'),
(20, 2, 16, 'Victoria'),
(21, 8, 17, 'Victoria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monstruos`
--

CREATE TABLE `monstruos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(16) NOT NULL,
  `nivelAmenaza` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `monstruos`
--

INSERT INTO `monstruos` (`id`, `nombre`, `nivelAmenaza`) VALUES
(0, 'Garou', 'Dragon ++'),
(1, 'Orochi', 'Dragon +'),
(2, 'Psykos', 'Dragon'),
(3, 'Black Sperm', 'Dragon'),
(4, 'Rover', 'Dragon'),
(5, 'Agua Natural Mal', 'Dragon'),
(6, 'Cienpies Anciano', 'Dragon'),
(7, 'Emperador sin ho', 'Dragon'),
(8, 'Encias', 'Dragon'),
(9, 'Nyan', 'Dragon'),
(10, 'Haragiri', 'Desconocido'),
(11, 'Melzargard', 'Dragón'),
(12, 'Phoenix Man', 'Dragón'),
(13, 'Meteoro', 'Dragón'),
(14, 'Eyesight', 'Demonio'),
(15, 'Fist Fight Djinn', 'Demonio'),
(16, 'Evil Eye', 'Desconocido'),
(17, 'Pureblood', 'Demonio');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `heroes`
--
ALTER TABLE `heroes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `heroe_monstruo`
--
ALTER TABLE `heroe_monstruo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_heroe` (`id_heroe`),
  ADD KEY `id_monstruo` (`id_monstruo`);

--
-- Indices de la tabla `monstruos`
--
ALTER TABLE `monstruos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `heroe_monstruo`
--
ALTER TABLE `heroe_monstruo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `heroe_monstruo`
--
ALTER TABLE `heroe_monstruo`
  ADD CONSTRAINT `heroe_monstruo_ibfk_1` FOREIGN KEY (`id_heroe`) REFERENCES `heroes` (`id`),
  ADD CONSTRAINT `heroe_monstruo_ibfk_2` FOREIGN KEY (`id_monstruo`) REFERENCES `monstruos` (`id`) ON DELETE CASCADE;


SELECT m.nombre, m.nivelAmenaza FROM monstruos m LEFT JOIN heroes h 
      ON u.usuario_id = ut.usuario_id
  LEFT JOIN tipo t 
      ON t.tipo_id = ut.tipo_id 

SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "1";

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


