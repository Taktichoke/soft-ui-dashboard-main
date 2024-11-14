<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useApiStore } from '@/stores/api'

const apiStore = useApiStore()

const date = ref(new Date().getFullYear());

function numberWithCommas(x: string) {
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}


onMounted(async () => {
  await apiStore.getData()
})

</script>

<template>

  <div class="g-sidenav-show bg-gray-100">
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-5 fixed-start ms-4"
      id="sidenav-main">
      <div class="sidenav-header pt-2 ">
        <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true" id="iconSidenav"></i>
        <img src="/src/assets/img/logo.png" class="navbar-brand-img h-100" alt="main_logo" />
        <span class="ms-1 font-weight-bold">Komgrip Technologies</span>
      </div>
      <hr class="horizontal dark mt-0" />
      <div class="collapse navbar-collapse w-auto max-height-vh-100 h-50" id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="../pages/dashboard.html">
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>shop</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero">
                      <g transform="translate(1716.000000, 291.000000)">
                        <g transform="translate(0.000000, 148.000000)">
                          <path class="color-background opacity-6"
                            d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z">
                          </path>
                          <path class="color-background"
                            d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <span class="nav-link-text ms-1">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
                </svg>
              </div>
              <span class="nav-link-text ms-1">Menu 1</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
                </svg>
              </div>
              <span class="nav-link-text ms-1">Menu 2</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
                </svg>
              </div>
              <span class="nav-link-text ms-1">Menu 3</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <div
                class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
                </svg>
              </div>
              <span class="nav-link-text ms-1">Menu 4</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="sidenav-footer mx-3 mt-5">
        <div class="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
          <div class="full-background" style="
              background-image: url('../assets/img/curved-images/white-curved.jpeg');
            "></div>
          <div class="card-body text-start p-3 w-100">
            <div class="docs-info">
              <h6 class="text-white up mb-0">Need help?</h6>
              <p class="text-xs font-weight-bold">CoinCap API 2.0</p>
              <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" target="_blank"
                class="btn btn-white btn-sm w-100 mb-0">Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <main class=" main-content position-relative max-height-vh-100 h-100 mt-2 border-radius-lg">
      <!-- Navbar -->
      <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
        navbar-scroll="true">
        <div class="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li class="breadcrumb-item text-sm">
                <a class="opacity-5 text-dark" href="javascript:;">Pages</a>
              </li>
              <li class="breadcrumb-item text-sm text-dark active" aria-current="page">
                Dashboard
              </li>
            </ol>
            <h6 class="font-weight-bolder mb-0">Dashboard</h6>
          </nav>
          <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            </div>
            <ul class="navbar-nav justify-content-end">
              <li class="nav-item d-flex align-items-center">
                <a href="javascript:;" class="nav-link text-body font-weight-bold px-0">
                  <i class="fa fa-user me-sm-1"></i>
                  <span class="d-sm-inline d-none mx-2">Phanuwit Hongsin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" v-for="data in apiStore.datas" :key="data.rank">
            <div class="card" v-if="Number(data.rank) <= 4">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">
                        {{ data.name }}
                      </p>
                      <h5 class="font-weight-bolder mb-0">
                        ${{ numberWithCommas(parseFloat(data.priceUsd).toFixed(2)) }}
                        <!-- {{ Math.floor((Number(data.marketCapUsd) / Number(data.vwap24Hr)) * 100) }} -->
                        <div class="text-success text-sm font-weight-bolder mt-2">
                          <!-- {{parseFloat(data.changePercent24Hr).toFixed(2) }}% -->
                          {{ parseFloat(data.vwap24Hr).toFixed(2) }}%
                        </div>
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
            <div class="card">
              <div class="card-header pb-0">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6>Cryptocurrencies</h6>
                  </div>
                  <div class="col-lg-6 col-5 my-auto text-end">
                    <div class="float-lg-end pe-4">
                      <button class="btn btn-outline-primary btn-sm mb-0 mx-2">
                        <i class="fa fa-chevron-left"></i>
                      </button>
                      <button class="btn btn-outline-primary btn-sm mb-0">
                        <i class="fa fa-chevron-right  "></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body px-0 pb-2">
                <div class="table-responsive">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                          No
                        </th>
                        <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                          Name
                        </th>
                        <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                          SYMBOL
                        </th>
                        <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                          SUPPLY/MAX SUPPLY
                        </th>
                        <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                          USD
                        </th>
                        <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                          24 HR
                        </th>
                      </tr>
                    </thead>
                    <tbody v-for="data of apiStore.datas" :key="data.rank">
                      <tr v-if="Number(data.rank) <= 5">
                        <td>
                          <div class="px-4 py-1">
                            <h6 class="mb-0 text-secondary opacity-7">{{ data.rank }}.</h6>
                          </div>
                        </td>
                        <td>
                          <div class="py-1">
                            <h6 class="mb-0 text-secondary opacity-7">{{ data.name }}</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center py-1">
                            <h6 class="mb-0 text-secondary opacity-7">{{ data.symbol }}</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center py-1">
                            <h6 class="mb-0 text-secondary opacity-7">
                              <span>{{ numberWithCommas(parseFloat(data.supply).toFixed(0)) }}</span> /
                              <span v-if="data.maxSupply == null">
                                NOT LIMIT
                              </span>
                              <span v-else>
                                {{ numberWithCommas(parseFloat(data.maxSupply).toFixed(0)) }}
                              </span>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center py-1">
                            <h6 class="mb-0 text-secondary opacity-7">${{
                              numberWithCommas(parseFloat(data.priceUsd).toFixed(2)) }}</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center py-1">
                            <h6 class="mb-0 text-secondary opacity-7">
                              <span class="text-danger" v-if="Number(data.changePercent24Hr) < 0">
                                {{ parseFloat(data.changePercent24Hr).toFixed(2) }}%
                              </span>
                              <span class="text-success" v-else>
                                +{{ parseFloat(data.changePercent24Hr).toFixed(2) }}%
                              </span>
                            </h6>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer pt-3">
          <div class="container-fluid">
            <div class="row align-items-center justify-content-lg-between">
              <div class="col-lg-6 mb-lg-0 mb-4">
                <div class="copyright text-center text-sm text-muted text-lg-start">
                  Copyright ©
                  {{ date }}
                  Komgrip Technologies Co., Ltd.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>

<style scopedx></style>
