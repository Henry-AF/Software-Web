# Sistema de Análise de Mutação Genética para Detecção de PKD1

Bem-vindo ao repositório do CatBio Search, um Sistema de Análise de Mutação Genética, um projeto dedicado a analisar mutações genéticas para a detecção da Doença Renal Policística 1 (PKD1) em gatos da raça Persa. Este sistema utiliza ferramentas e técnicas de bioinformática para identificar mutações no gene PKD1, fornecendo informações cruciais para a pesquisa e diagnóstico médico.

## Índice

- [Introdução](#introdução)
- [Recursos](#recursos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Configuração](#configuração)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Agradecimentos](#agradecimentos)

## Introdução

A Doença Renal Policística (PKD) é um distúrbio genético caracterizado pelo crescimento de numerosos cistos nos rins. O PKD1 é um dos dois genes associados a essa doença. O objetivo deste projeto é desenvolver um sistema que possa analisar dados genéticos para detectar mutações no gene PKD1, auxiliando no diagnóstico precoce e na pesquisa.

## Recursos

- **Importação de Dados**: Importa dados genéticos do formato FASTA.
- **Análise de Mutações**: Identifica e classifica mutações no gene PKD1.
- **Relatórios**: Gera relatórios detalhados das mutações detectadas.
- **Visualização**: Visualiza as localizações e frequências das mutações.
- **Interface de Usuário**: Interface intuitiva baseada na web para facilitar o uso.

## Instalação

### Pré-requisitos

Certifique-se de ter o seguinte software instalado:

- Python 3.8+
- pip (instalador de pacotes Python)
- Git

### Clonar o Repositório

```bash
git clone [https://github.com/Henry-AF/Software-Web]
cd Software-Web
```

### Instalar Dependências

```bash
pip install -r requirements.txt
```

## Uso

### Executando o Sistema

Para iniciar a aplicação web, use o seguinte comando:

```bash
python app.py
```

Abra seu navegador web e navegue até `http://localhost:5000`.

### Importando Dados

1. Navegue até a seção "Cadastrar".
2. Faça o upload do seu arquivo de dados genéticos (formatos suportados: FASTA).
3. Clique em "Salvar e Continuar" para iniciar a análise de mutação.

### Visualizando Resultados

- Acesse a seção "Resultados" para ver os dados analisados.
- Use as ferramentas de visualização para explorar as distribuições das mutações.

## Configuração

Configure as definições do sistema em `config.yaml`:

```yaml
database:
  host: localhost
  port: 27017
  name: analise_pkd

analysis:
  pkd1_gene:
    start_position: 1000
    end_position: 2000

logging:
  level: INFO
  file: logs/sistema.log
```

## Licença

Este projeto está licenciado sob a Licença.

## Agradecimentos

Gostaríamos de agradecer às seguintes organizações e indivíduos pelo suporte e contribuições:

- [FATEC REGISTRO]([https://www.bioinformatics.org](https://fatecregistro.cps.sp.gov.br/)) por seus recursos e ferramentas valiosas.

---

Para qualquer dúvida ou problema, por favor, abra uma issue neste repositório ou entre em contato conosco pelo e-mail suporte@exemplo.com.

Boas contribuições!

[![GitHub issues](https://img.shields.io/github/issues/seuusuario/sistema-analise-mutacao-genetica)](https://github.com/seuusuario/sistema-analise-mutacao-genetica/issues)
[![GitHub forks](https://img.shields.io/github/forks/seuusuario/sistema-analise-mutacao-genetica)](https://github.com/seuusuario/sistema-analise-mutacao-genetica/network)
[![GitHub stars](https://img.shields.io/github/stars/seuusuario/sistema-analise-mutacao-genetica)](https://github.com/seuusuario/sistema-analise-mutacao-genetica/stargazers)
